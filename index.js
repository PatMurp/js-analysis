#! /usr/bin/env node
var exec = require('child_process').exec;
var child = exec('node_modules/.bin/jshint *.js', function(err, stdout, stderr) {
	console.log(stdout);
});





