'use strict';
const shell = require('shelljs/global');
const summary = require('./summary');


module.exports.lintJSHint = function() {
	echo('running jshint') &&
	exec('node_modules/.bin/jshint --exclude ./node_modules,reports .').
	to('reports/jshint.txt');
};

module.exports.lintESlint = function() {
	echo('running eslint') &&
	exec('node_modules/.bin/eslint --ignore-pattern "reports" .').
	to('reports/eslint.txt');
};

