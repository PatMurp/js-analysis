'use strict';
const fs = require('fs');

module.exports.copyConfig = function() {
	jshintRules();
	jshintIgnore();
};

function jshintRules() {
	fs.createReadStream('node_modules/js-analysis/linters/.jshintrc').
	pipe(fs.createWriteStream('.jshintrc'));
};

function jshintIgnore() {
	fs.createReadStream('node_modules/js-analysis/linters/.jshintignore').
	pipe(fs.createWriteStream('.jshintignore'));
}


function eslintRules() {
	fs.createReadStream('node_modules/js-analysis/linters/.eslintrc.js').
	pipe(fs.createWriteStream('.eslintrc.js'));
};

function eslintIgnore() {
	fs.createReadStream('node_modules/js-analysis/linters/.eslintignore').
	pipe(fs.createWriteStream('.eslintignore'));
};


