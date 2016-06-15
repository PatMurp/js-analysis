#! /usr/bin/env node
var shell = require('shelljs');

// if reports directory doesnt exist create it
shell.exec('mkdir -p reports');

shell.exec('echo "running jshint" && node_modules/.bin/jshint index.js > reports/jshint.txt');




