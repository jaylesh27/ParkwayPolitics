var express = require("express");
var path = require("path");
var cheerio = require('cheerio');
var request = require('request');
// var apiKeys = require('./api-keys.js');
var path = require('path');
var bodyParser = require('body-parser');
var podcastData = require('./episodes.json');

// console.log(podcastData[0]);

const app = express();

// process.env.NODE_ENV = 'production';

if (process.env.NODE_ENV !== "production") {
	const webpackMiddleware = require("webpack-dev-middleware");
	const webpack = require("webpack");
	const webpackConfig = require("./webpack.config.js");
	app.use(webpackMiddleware(webpack(webpackConfig)));
	console.log("running webpack development server");
} else {
	console.log("running production");
}

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("build"));


app.get("/", function(req, res) {
	res.sendFile(__dirname + "/build/index.html");
});


app.get('/api/fetch-nj-news', function(req, res) {

	request('https://www.nj.com/politics', function(error, response, html) {
	console.log("fetch news error: "+error);
		var $ = cheerio.load(html);
		var results = [];

		$('#river-container ul li.river-item.has-photo article').each(function(i, element) {

			var articleLink = $(element).find('div.item-text').find('h2.h2.fullheadline').find('a').attr('href');
			var articleImgLink = $(element).find('div.item-extra').find('div.item-photo').find('img').attr('src');
			var articleHeadline = $(element).find('div.item-text').find('h2.h2.fullheadline').find('a').text();
			var trimmedHeadline = articleHeadline.replace("\n                        ", "");
			var finalHeadline = trimmedHeadline.replace('\n                    ', "");
			var articleId = $(element).parent().attr('data-resource-id');
			results.push({ link: articleLink, image: articleImgLink, headline: finalHeadline, id: articleId });
		});

		res.json(results);
		
	});
});


app.get('/api/fetch-nyt-news', function(req, res) {

	var queryURL = '';
});

app.get('/api/fetch-podcasts', function(req, res) {
	console.log('sending podcast data');
	res.json(podcastData);
});


app.get('/*', function(req, res) {
	res.sendFile(__dirname + "/build/index.html");
});

app.listen(process.env.PORT || 3000, () => console.log("listening on port"));