var express = require("express");
var path = require("path");
var cheerio = require('cheerio');
var request = require('request');

const app = express();

app.get('/fetch-news', function(req, res) {

	request('http://www.nj.com/politics', function(error, response, html) {

		if(html) {
			var $ = cheerio.load(html);
			console.log("html loaded into cheerio successfully");
			var results = [];

			$('div#river-container ul').each(function(i, element) {
				var articleLink = $(element).find('li').find('article').find("div.item-text").find("h2.h2.fullheadline").find("a").attr("href");
				// var test = $(element).find('li');
				results.push({ link: articleLink});
			});

			// console.log(results);
			if(results) {
				res.send(results);
			}else {
				console.log("loading results");
			}

		}else {
			console.log("no html loaded into cheerio yet");
			res.redirect('/fetch-news');
		}
		
	});
});


if (process.env.NODE_ENV !== "production") {
	const webpackMiddleware = require("webpack-dev-middleware");
	const webpack = require("webpack");
	const webpackConfig = require("./webpack.config.js");
	app.use(webpackMiddleware(webpack(webpackConfig)));
	console.log("running webpack development server");
} else {
	app.use(express.static("build"));
}

app.listen(process.env.PORT || 3000, () => console.log("listening on port"));