#! /usr/bin/env node
const shell = require('shelljs/global')
const lint = require('./src/lint');
const check = require('./src/checkModules')
const dir = require('./src/directory')
const maint = require('./src/mantainability');


// if reports directory doesnt exist create it
dir.checkDirectorySync('./reports')

lint.lintFiles();
check.checkDependencies()
maint.plato();









