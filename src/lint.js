'use strict';
const shell = require('shelljs/global');



module.exports.lintFiles = function() {

	return echo('running jshint') &&
	exec('node_modules/.bin/jshint --exclude ./node_modules . > reports/jshint.txt');
};



