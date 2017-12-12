var wepback = require('webpack');
var path = require('path');


// This webpack plugin creates an index.html file (based off the template specified in our app directory) with script tags for the bundled JS files and will get outputted in the build directory.
var HtmlWebpackPlugin = require('html-webpack-plugin');

