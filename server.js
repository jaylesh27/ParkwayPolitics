var express = require("express");
var path = require("path");
var cheerio = require('cheerio');
// var request = require('request');

const app = express();

// function scrapeNjDotCom() {
// 	request('http://www.nj.com/', function(error, response, html) {
// 		var $ = cheerio.load(html);
// 		var results = [];

// 		$('div#river-container').each(function(i, element) {
// 			var title = $(element).find('ul').children('li')
// 		});
// 	});
// }


// app.get('/fetch-news', function(req, res) {
// 	scrapeNjDotCom();
// 	res.send(results);
// });


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
