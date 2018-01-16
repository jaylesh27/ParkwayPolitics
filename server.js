const express = require("express");
const path = require("path");

const app = express();

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
