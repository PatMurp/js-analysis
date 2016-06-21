'use strict';
const shell = require('shelljs/global');

const date = new Date().toUTCString();
const heading = ('analysis run on ' + date + ' \n');
const summary = 'reports/summary.txt';

// build report summary
module.exports.fileTail = function() {
	echo(heading).toEnd(summary);
	jshintSummary();
	eslintSummary();
	jsinspectSummary();
};

function jshintSummary() {
	echo('jshint ').toEnd(summary) &&
	exec('tail -1 reports/jshint.txt | head -1')
	.toEnd(summary + '\n');
};

function eslintSummary() {
	echo('eslint ').toEnd(summary) &&
	exec('tail -2 reports/eslint.txt | head -1')
	.toEnd(summary + '\n');
};

function jsinspectSummary() {
	echo('jsinspect ').toEnd(summary) &&
	exec('tail -1 reports/jsinspect.txt | head -1')
	.toEnd(summary + '\n');
};



