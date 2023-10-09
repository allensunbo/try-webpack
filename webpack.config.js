// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
/** @type {'development'|'production'} */
const mode = 'development';
// @ts-check
/** @type  {import ("webpack").Configuration} */
const config = {
	mode,
	entry: {
		pageOne: './src/pageOne',
		pageTwo: './src/pageTwo'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: __dirname + '/dist',
	},
	resolve: {
		alias: {
		"@hello": path.resolve(__dirname, "submodules/hello/src"),
		}
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					/** @type {'initial'} */
					chunks: "initial",
				},
			},
		},
		runtimeChunk: {
			name: 'manifest'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Main Page',
			template: 'index.html',
			chunks: ['vendor']
		}),
		new HtmlWebpackPlugin({
			filename: 'pageOne.html',
			title: 'Page One',
			template: 'page.html',
			chunks: ['pageOne'],
			page: 'pageOne'
		}),
		new HtmlWebpackPlugin({
			filename: 'pageTwo.html',
			title: 'Page Two',
			template: 'page.html',
			chunks: ['pageTwo'],
			page: 'pageTwo'
		})
	],
};
module.exports = config;