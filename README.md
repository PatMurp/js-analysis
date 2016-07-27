# js-analysis
run static analysis tools on node.js projects to enhance security

### Temporary application use & testing
clone application

	$ cd js-analysis
	$ npm i  
	$ npm link

This installs script on system and & any changes to js-analysis will be updated automatically  
cd into root of any Node.js project  
Install module via git  
Run static command on project  
A reports directory is generated and plato report is opened in default browser
### Install using npm and initial run

	$ npm i --save git+https://github.com/PatMurp/js-analysis.git
	$ cpRules && static

### Normal use
	$ static
	
### NPM Modules Used

- [JSHint] (http://jshint.com/) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.
- [Jsinspect] (https://github.com/danielstjules/jsinspect) - Jsinspect detects copy-pasted and structurally similar code.
- [nsp] (https://nodesecurity.io/opensource) - nsp is a command line tool that allows for auditing a package.json or npm-shrinkwrap.json file to keep known vulnerabilities from creeping into your projects.
- [Opener] (https://www.npmjs.com/package/opener) - Opener opens stuff, like webpages and files and executables, cross-platform.
- [Plato] (https://github.com/deedubs/es6-plato) - Plato is a JavaScript source code visualization, static analysis, and complexity tool.
- [Shelljs] (https://github.com/shelljs/shelljs) - Shelljs is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API.