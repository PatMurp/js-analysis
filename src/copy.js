'use strict';
const fs = require('fs');


function jshintRules() {
	fs.createReadStream('node_modules/js-analysis/linters/.jshintrc').
	pipe(fs.createWriteStream('.jshintrc'));
}

function jshintIgnore() {
	fs.createReadStream('node_modules/js-analysis/linters/.jshintignore').
	pipe(fs.createWriteStream('.jshintignore'));
}

function jsinspectIgnore() {
	fs.createReadStream('node_modules/js-analysis/linters/.jsinspectrc').
	pipe(fs.createWriteStream('.jsinspectrc'));
}

module.exports.copyConfig = function() {
	jshintRules();
	jshintIgnore();
	jsinspectIgnore();
};
