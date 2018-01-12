var webpack = require("webpack");
var path = require("path");

// This webpack plugin creates an index.html file (based off the template specified in our app directory) with script tags for the bundled JS files and will get outputted in the build directory.
var HtmlWebpackPlugin = require("html-webpack-plugin");

// VENDOR_LIBS will contain an array of strings with each item in the array being the name of the 3rd party library we want to include in the separate vendor file
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
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				// below line checks for any files that are jpg, jpeg, png, gif, or svg files (regex)
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						// the url-loader's purpose is to take the images inside of our project and copy them into our build folder.  When this is done, the url-loader goes back to the import statement inside of our image_viewer.js file.  url-loader assigns a new name to the image that surpasses the limit property below as a random set of characters.  this new name is then assigned to the big variable in the import statement
						loader: 'url-loader',
						// the options object has a limit property with a value of 40000.  this means look for any images that are greater than 40000 bytes, save it to the build/output directory.  If smaller, save it as raw data to bundle.js
						options:  {
							limit: 40000,
							fallback: 'file-loader'
						}
					}

				]
			}
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
