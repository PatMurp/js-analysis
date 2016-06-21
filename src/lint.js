'use strict';
const shell = require('shelljs/global');
const summary = require('./summary');


module.exports.lintFiles = function() {

	echo('running jshint') &&
	exec('node_modules/.bin/jshint --exclude ./node_modules,reports . > reports/jshint.txt');
	
};




