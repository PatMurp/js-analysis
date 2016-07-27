'use strict';
const shell = require('shelljs/global');

module.exports.duplicate = function() {
	echo('running jsinspect') && 
	exec('node_modules/.bin/jsinspect .').
	to('reports/jsinspect.txt');
};

