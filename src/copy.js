'use strict';
const fs = require('fs');

module.exports.copyConfig = function() {
	jshintRules();
	eslintRules();
};

function jshintRules() {
	fs.createReadStream('node_modules/js-analysis/.jshintrc').
	pipe(fs.createWriteStream('.jshintrc'));
};

function eslintRules() {
	fs.createReadStream('node_modules/js-analysis/.eslintrc.js').
	pipe(fs.createWriteStream('.eslintrc.js'));
};


