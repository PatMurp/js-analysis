'use strict';
const shell = require('shelljs/global');

module.exports.lintJSHint = function() {
	echo('running jshint') &&
	exec('node_modules/.bin/jshint .').
	to('reports/jshint.txt');
};

module.exports.lintESlint = function() {
	echo('running eslint') &&
	exec('node_modules/.bin/eslint .').
	to('reports/eslint.txt');
};

