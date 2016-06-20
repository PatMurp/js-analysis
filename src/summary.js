'use strict';
const shell = require('shelljs/global');

const date = new Date().toUTCString();
const heading = ('analysis run on ' + date + ' \n');

module.exports.fileTailJshint = function() {
	return echo(heading).toEnd('reports/summary.txt') &&
	echo('jshint ').toEnd('reports/summary.txt') &&
	exec('tail -1 reports/jshint.txt | head -1').toEnd('reports/summary.txt\n');
};



