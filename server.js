var express = require("express");
var path = require("path");
var cheerio = require('cheerio');
var request = require('request');
var apiKeys = require('./api-keys.js');
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');

const app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
  

if (process.env.NODE_ENV !== "production") {
	const webpackMiddleware = require("webpack-dev-middleware");
	const webpack = require("webpack");
	const webpackConfig = require("./webpack.config.js");
	app.use(webpackMiddleware(webpack(webpackConfig)));
	console.log("running webpack development server");
} else {
	app.use(express.static("build"));
}

app.get('/api/fetch-nj-news', function(req, res) {

	request('http://www.nj.com/politics', function(error, response, html) {

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
		// console.log(results);

		var eightResults = [];

		for (i = 0; i < 8; i++) {
			eightResults.push(results[i]);
		}
		
		res.json(eightResults);
		console.log(eightResults);
		
	});
});

app.get('/api/fetch-nyt-news', function(req, res) {

	var queryURL = '';
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/build/index.html");
});

app.get('*', function(req, res) {
	res.sendStatus(404);
});

app.listen(process.env.PORT || 3000, () => console.log("listening on port"));