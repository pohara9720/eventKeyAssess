var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: [
					path.join(__dirname, 'src'),
					path.join(__dirname, 'server'),
					path.join(__dirname, 'node_modules')
				]
			},
			{
				test: /\.css?$/,
				loader: 'css-loader',
				include: [
					path.join(__dirname, 'src'),
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
			}
		]
	},
}