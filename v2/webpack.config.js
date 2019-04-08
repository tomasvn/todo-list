'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: require.resolve('babel-loader'),
				options: {
					compact: true,
					presets: ['@babel/preset-env'],
					plugins: ['@babel/plugin-proposal-object-rest-spread']
				},
			},
			{
				test: /\.(css|scss)$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								autoprefixer({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9',
									],
									flexbox: 'no-2009',
								}),
							],
						},
					},
					{
						loader: require.resolve('sass-loader'),
						options: {
							strictMath: true
						},
					},
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './src/static/index.html',
		}),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};