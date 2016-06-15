#! /usr/bin/env node
var shell = require('shelljs')

// if reports directory doesnt exist create it
shell.exec('mkdir -p reports');

// jshint
shell.exec('echo "running jshint" && node_modules/.bin/jshint index.js > reports/jshint.txt');

// nsp
shell.exec('echo "running nsp" && node_modules/.bin/nsp check > reports/nps.txt')


