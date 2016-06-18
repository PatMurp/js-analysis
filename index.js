#! /usr/bin/env node
const shell = require('shelljs/global')
const lint = require('./src/lint');
const check = require('./src/checkModules')
// if reports directory doesnt exist create it

mkdir('-p', 'reports')

lint.lintFiles();
check.checkDependencies()





