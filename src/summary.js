'use strict';
const shell = require('shelljs/global');

const date = new Date().toUTCString();
const heading = ('analysis run on ' + date + ' \n');
const summary = 'reports/summary.txt';

function jshintSummary() {
	echo('jshint ').toEnd(summary) &&
	exec('tail -1 reports/jshint.txt | head -1')
	.toEnd(summary + '\n');
}

function jsinspectSummary() {
	echo('jsinspect ').toEnd(summary) &&
	exec('tail -1 reports/jsinspect.txt | head -1')
	.toEnd(summary + '\n');
}

// build report summary
module.exports.generate = function() {
	echo(heading).toEnd(summary);
	jshintSummary();
	jsinspectSummary();
};
