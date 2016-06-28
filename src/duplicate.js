'use strict';
const shell = require('shelljs/global');

module.exports.duplicate = function() {
	echo('running jsinspect') &&
	exec('node_modules/.bin/jsinspect --ignore "node_modules|reports|bower_components|public/scripts/externe" .').
	to('reports/jsinspect.txt');
};

