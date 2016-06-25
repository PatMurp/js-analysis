'use strict';
const shell = require('shelljs/global');
const opener = require('opener');

// construct plato command
const projName = exec('basename "$PWD"');
const dir = ' -r -d reports/plato';
const lint = '-l .jshintrc';
const title = ' -t ' +  '"' + projName + '"';
const exclude = ' -x "node_modules/|reports" . ';
const platoCommand = 'node_modules/.bin/plato' +  title + dir + exclude  + lint ;


module.exports.plato = function() {
	exec(platoCommand) &&
	opener('reports/plato/index.html');
};
