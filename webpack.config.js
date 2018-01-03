var webpack = require("webpack");
var path = require("path");

// This webpack plugin creates an index.html file (based off the template specified in our app directory) with script tags for the bundled JS files and will get outputted in the build directory.
var HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = ["axios", "body-parser", "express", "react", "react-dom"];

module.exports = {
	entry: {
		bundle: "./src/index.js",
		vendor: VENDOR_LIBS
	},

	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].[chunkhash].js"
	},

	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}
			// {
			// 	use: ["style-loader", "css-loader"],
			// 	test: /\.css$/
			// }
		]
	},

	node: {
		console: true,
		fs: "empty",
		net: "empty",
		tls: "empty"
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ["vendor", "manifest"]
		}),

		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	]
};
