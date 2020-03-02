Module:
A group of code and data related to a  particular piece of functionality.
It encapsulates implementation details
Exposes a public api
Combined with other modules to build a larger application.

The Goals of Modularity:
	1. Create higher level of abstractions - (Let you think about your application in larger building blocks. Modules are chunks of functionality instead of individual function.)
	2. Encapsulation - hides the implementation details
	3. Reusability - reuse in same or across multiple app
	4. Simplifed dependency management - every module will declare all other modules that are required to function properly. There would be a tooling support to pull all those modules only when they are needed.
	
	
	


Module Patterns in ES5
Couple of patterns to implement pure ES5 javascript without including any external libraries.
ES5 is the official name of javascript that is currently supported by most browsers.


Module Formats and Loaders
Create modules using popular AMD and Commonjs formats. 
To load modules, we can use systemjs and requirejs

Modules in ES2015
Most browsers dont suppport the new version of javascript syntax.
babel - to transform ES2015 to ES5 to work in all browsers


Tools Needed to Develop:
Visual Studio Code	- https://code.visualstudio.com
Node.js	- https://nodejs.org
npm  - To install various npm packages