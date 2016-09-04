# js-analysis
run static analysis tools on node.js projects to enhance security


### Install npm module 

	$ npm i --save git+https://github.com/PatMurp/js-analysis.git
### Initial use
	$ $(npm bin)/cpRules
	$ $(npm bin)/static
	
### Normal use
	$ $(npm bin)/static
	
### Add as a npm script  in package.json
	"scripts": {
		"static": "static"
	},
	
	$ npm run static
	
### cpRules command
**!!! This command must be run after module is installed. !!!**  
Copies three files from node module to project root:  
.jshintrc - author generated security rules, also available [here] (https://gist.github.com/PatMurp/9ff6aef85deeb91c3c6b)  
.jshintignore - folders to ignore during JSHint analysis.  
.jsinspectrc - folders to ignore during Jsinspect analysis. 

### static command	
When tool is run a report folder is generated in the project.  
A Plato report for the project is opened in the default browser.  
nsp tool analysis results are displayed in the terminal window.  
Report folder contains 3 txt files:  
jshint.txt - JSHint analysis results; rewritten after each analysis.  
jsinspect.txt - Jsinspect analysis results; rewritten after each analysis.  
summary.txt - summary of analysis results are appended to this file after each analysis.  
To exclude an additional folder from analysis add to .jshintignore & .jsinspectrc



### NPM Modules Used

- [JSHint] (http://jshint.com/) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.
- [Jsinspect] (https://github.com/danielstjules/jsinspect) - Jsinspect detects copy-pasted and structurally similar code.
- [nsp] (https://nodesecurity.io/opensource) - nsp is a command line tool that allows for auditing a package.json or npm-shrinkwrap.json file to keep known vulnerabilities from creeping into your projects.
- [Opener] (https://www.npmjs.com/package/opener) - Opener opens stuff, like webpages and files and executables, cross-platform.
- [Plato] (https://github.com/deedubs/es6-plato) - Plato is a JavaScript source code visualization, static analysis, and complexity tool.
- [Shelljs] (https://github.com/shelljs/shelljs) - Shelljs is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API.