#! /usr/bin/env node
const lint = require('./src/lint');
const check = require('./src/checkModules');
const dir = require('./src/directory');
const maint = require('./src/mantainability');
const duplc = require('./src/duplicate');
const summary = require('./src/summary');

// if reports directory doesnt exist create it
dir.checkDirectorySync('./reports');

lint.lintJSHint();
duplc.duplicate();
maint.plato();


summary.generate();
check.checkDependencies();






