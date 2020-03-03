Module:
A group of code and data related to a  particular piece of functionality.
It encapsulates implementation details
Exposes a public api
Combined with other modules to build a larger application.
Packaging and distribution is easy.

The Goals of Modularity:
	1. Create higher level of abstractions - (Let you think about your application in larger building blocks. Modules are chunks of functionality instead of individual function.)
	2. Encapsulation - hides the implementation details
	3. Reusability - reuse in same or across multiple app
	4. Simplifed dependency management - every module will declare all other modules that are required to function properly. There would be a tooling support to pull all those modules only when they are needed. For instance, if i create a department module which depends on a employee module, the department module should explicitly declare the dependency and my tool should pull it for me so we dont need to remember all those.
	If we assemble a web application with lots of different inner related javascript files, then there is a pain to include all those scripts in html file with proper order.
	A Correctly implemented good module system will go away this issue.	
	

Course Modules:
	1. Module Patterns in ES5 - Couple of patterns to implement pure ES5 javascript without including any external libraries.
ES5 is the official name of javascript that is currently supported by most browsers.
	2. Module Formats and Loaders - Create modules using popular AMD and Commonjs formats. To load modules, we can use systemjs and requirejs
	3. Modules in ES2015 - New module syntax built in to the new javascript language. Most browsers dont recognize this new syntax. We can use babel tool to transpile those modules (ES2015) into a module (ES5 or AMD or Commonjs) which todays browser support.
	4. Module bundlers - popular bundlers such as browserify, ngpackgr and webpack.

Tools Needed to Develop:
Visual Studio Code	- https://code.visualstudio.com
Node.js	- https://nodejs.org (to run local webserver to serve the static files)
npm  - To install various npm packages (When you install node.js, you will get npm. we will install packages with npm.)

Structure of our demo app:
 - do something
 


Module Patterns in ES5: (Pure ES5 javascript code without any external libraries)

	1.Immediately-invoked function expressions (IIFE)
	2.Revealing module pattern
		- Singleton
		- Constructor functions
		
	
IIFE ?:
	-> Anonymous function
	-> Invoked when declared
	-> Provides encapsulation
	-> Reducing global scope pollution
	-> No dependency management
	
Revealing Module pattern:
	-> Function scoping provides encapsulation - variables are scoped to function & provides nice encapsulation
	-> Add one value to global scope per module
	-> Clear delineation between private implementation and public API
	-> No dependency management (disadvantage)
	-> This pattern comes in two flavours
		- Singleton
		- Constructor functions