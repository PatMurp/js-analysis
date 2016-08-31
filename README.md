# js-analysis
run static analysis tools on node.js projects to enhance security


### Install npm module 

	$ npm i --save git+https://github.com/PatMurp/js-analysis.git
### Initial use
	$ $(npm bin)/cpRules
	$ $(npm bin)/static
	
### Normal use
	$ $(npm bin)/static
	
### Add an npm script  in package.json
	"scripts": {
		"static": static
	},
	
	$ npm run static
	
### NPM Modules Used

- [JSHint] (http://jshint.com/) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.
- [Jsinspect] (https://github.com/danielstjules/jsinspect) - Jsinspect detects copy-pasted and structurally similar code.
- [nsp] (https://nodesecurity.io/opensource) - nsp is a command line tool that allows for auditing a package.json or npm-shrinkwrap.json file to keep known vulnerabilities from creeping into your projects.
- [Opener] (https://www.npmjs.com/package/opener) - Opener opens stuff, like webpages and files and executables, cross-platform.
- [Plato] (https://github.com/deedubs/es6-plato) - Plato is a JavaScript source code visualization, static analysis, and complexity tool.
- [Shelljs] (https://github.com/shelljs/shelljs) - Shelljs is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API.