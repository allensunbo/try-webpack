// @ts-check
/** @typedef { import ("webpack").webpack} */
const webpack = require('webpack');
// const path = require('path');
// const fs = require('fs');
const config = require('./webpack.config');
webpack(config, (err, stats) => {
	if (err || stats?.hasErrors()) {
		console.error(err);
		return;
	}
	console.log(stats?.toString({
		colors: true
	}));
});