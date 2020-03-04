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
 


1. Module Patterns in ES5: (Pure ES5 javascript code without any external libraries)

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

Summary:
The ES5 version of javascript is not designed with modules in mind. However the patters evolved over the years, the IIFE and Revealing Module pattern have some of the benefit and they are associated with modules. I dont pretend these patterns are perfect, but they do better organise the code that we write.
		
2. Module Formats and Loaders:

	A couple of module formats were developed to fill the gap that exist in revealing module pattern.
	using those module formats and the compatible module loader, it is easy to write modular code and have better organise and more maintainable code.
	
	Module Format -> syntax (Just a syntax to define a module. They exist independent of any particular loader.)
	Module loader -> execution (execute the module)
	
	It is simiiar to the javascript and browser. The javascript is exist independent of any particular browser. It is just a syntax, that requires a execution environment, that environment is provided by browser which we develop independently and the browser know how to interpret the syntax.
	
	Similiarly, module format like AMD format is exist independently of any particular module loader. It requires a loader that actually interprets & execute the module. AMD modules are loaded with different loaders like RequireJS, Curl.js and SystemJs.
	
	Non-Native Formats - 
		1. AMD - Asynchronous Module Definition
		2. Commonjs
		3. UMD - Universal Module  Definition
		4. System.register
	Native Formats
		5. ES2015
		
		
		
		1. AMD - supports loading modules asynchronously.
		2. CommonJS - More often used as part of node js applications. Node includes built in module loader that supports the commonjs.
		3. UMD - single format that attempts to be compatible both AMD & CommonJS formats. It would be supported by systemjs loader and require js loader. It is not a format to directly code into UMD. We target the UMD format as part of compilaton process from another language like typescript. 
		For instance, if we are developing our code with typescript or the newer ES2015 javascript language, we can configure the the typescript compiler or babel transpiler for ES2015 to output the modules into UMD for you.
		4. System.register - It is designed to work with very popular SystemJs module loader. SystemJs loads lots of different modules said above.
		
		Note: Above said 4 formats are non native formats and that means the syntax used to define the modules are not built on javascript language. Their specification and convention is independent of javascript language itsef.
		
		5. ES2015 - ES2015 is contrast to above 4 formats. It is the newer version of javascript language and it is the first version of javascript language which have built in support for modules as we call it as native format.
		
		Browsers dont yet support for all of the feature of ES2015 including the new module systax. Writing code in ES2015 and using native module syntax requires a transpilation step that outputs your javascript module into one of these other formats that can be executed in browser with one of their compatible module loader.
		
		ES2015 (Native) -> Transpilation Step -> Non-Native formats (AMD,UMD,System.register or CommonJS) -> Use module loader to execute in browser
		
		
Module loaders:
	Not all the module loaders support all module formats.
	
	RequireJS -> loads AMD Format
	SystemJs  -> loads AMD, CommonJS, UMD & System.register (we call it as universal module loader, since it loads all/most)
	
	
	
	AMD Format:
	define is not a buit in javascript function. It wil be implemented by the module loader,which we use in our project.
	It takes 2 parameters. one with a list of dependencies and another with the module behviour. The module loader see the dependencies given in the first parameter and loads them all first before continuinng the original module behaviour.
	
	Once the player module is loaded and it creates the instance for it and it is passed as parameter to the module.
	define(['./player'],function(player){
	  console.log('Starting game for '+player.getName());
	});
		
		
	