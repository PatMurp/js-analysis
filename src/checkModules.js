'use strict';
const shell = require('shelljs/global');

module.exports.checkDependencies = function() {
	return echo('running nsp check') &&
	exec('node_modules/.bin/nsp check  > reports/nsp.txt');
};