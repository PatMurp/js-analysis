'use strict';
const shell = require('shelljs/global');
const summary = require('./summary');


module.exports.lintFiles = function() {

	return echo('running jshint') &&
	exec('node_modules/.bin/jshint --exclude ./node_modules . > reports/jshint.txt')  &&
	summary.fileTailJshint();
};




