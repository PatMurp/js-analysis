#! /usr/bin/env node
const lint = require('./src/lint');
const check = require('./src/checkModules')
const dir = require('./src/directory')
// if reports directory doesnt exist create it

//mkdir('-p', 'reports')
dir.checkDirectorySync('./reports')

lint.lintFiles();
check.checkDependencies()





