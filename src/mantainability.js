'use strict';
const shell = require('shelljs/global');
const opener = require('opener');

module.exports.plato = function() {
	return exec('node_modules/.bin/plato -r -d reports/plato src -l .jshintrc') &&
	opener('reports/plato/index.html');
};
