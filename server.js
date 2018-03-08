var express = require("express");
var path = require("path");
var cheerio = require('cheerio');
var request = require('request');
var apiKeys = require('./api-keys.js');
var axios = require('axios');

// console.log(apiKeys.nyTimesKey);

const app = express();

app.get('/fetch-news', function(req, res) {

	request('http://www.nj.com/politics', function(error, response, html) {

		var $ = cheerio.load(html);
		var results = [];

		$('#river-container ul li.river-item.has-photo article').each(function(i, element) {

			var articleLink = $(element).find('div.item-text').find('h2.h2.fullheadline').find('a').attr('href');
			var articleImgLink = $(element).find('div.item-extra').find('div.item-photo').find('img').attr('src');
			var articleHeadline = $(element).find('div.item-text').find('h2.h2.fullheadline').find('a').text();
			var trimmedHeadline = articleHeadline.replace("\n                        ", "");
			var finalHeadline = trimmedHeadline.replace('\n                    ', "");
			results.push({ link: articleLink, image: articleImgLink, headline: finalHeadline });
		});

		res.json(results);
		
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