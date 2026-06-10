/* 
    What is Node.js?
    Node.js is an open-source JS runtime that allows you to execute Javascript
    code on the server side. It's built on Chrome's V8 JavaScript engine

    Code - https://github.com/nodejs/node

    Runtime?
    The environment where JavaScript code is executed. It could be
        1. On the server
        2. In the browser
        3. On a small watch

    V8 engine?
    The V8 engine is an open-source JavaScript engine developed by Google. It is used
    to execute JavaScript in various environments, most notably in the Google Chrome
    web browser

    Mozilla has their own JS engine - SpiderMonkey
    Safari - JavaScriptCore

    What is bun?
    Like Node.js, Bun is a Javascript runtime that allows you to execute JavaScript
    code on the server side

    Installing bun
    Linux: curl -fsSL https://bun.sh/install | bash

    Starting a Node.js project
    To initialize the Node.js project locally
        - Run the ffollowing command:
            npm init -y
        
        - Exploring package.json

        {
            "name": "5nodejsbunjsruntime",       // name of your website/app/library
            "version": "1.0.0",                  // current version
            "description": "",                   // entrypoint
            "main": "index.js",
            "scripts": {                         // Dev specified script
                "test": "echo \"Error: no test specified\" && exit 1"
            },

            // Metadata
            "keywords": [],
            "author": "",
            "license": "ISC"
        }
*/

// writing some code
// let firstName = "Raghunandan"
// console.log(firstName)

// run the code: node notes.js

/* 
    Add a script in package.json

    "scripts": {
        "start": "node notes.js"
    }

    Run npm run start
*/

/* 
    npm:
    The full form of NPM is Node Package Manager

    It is a package manager for JavaScript, primarly used for managing libraries
    and dependencies in Node.js projects. NPM allows developers to easily install,
    update, and manage packages of reusable code

    package managers are an important concept in programming languages/runtimes

    For ef the package manager od rust is cargo

    uses of npm 
        - initializing a project
            npm init
        
        - Running scripts
            npm run tests
        
        - Installing external dependencies
            npm install chalk
*/

// write some code
// const chalk = require("chalk")

// console.log(chalk.blue("Hello, world"))
// console.log(chalk.red.bold("This is an error message"))
// console.log(chalk.green.underline("This is a success message"))

/* 
    Internal package
    Node.js provides you some packages out of the box. Some common ones include
        1. fs - Filesystem
        2. path - Path related functions
        3. http - Create HTTP servers (we'll get this in next section)
*/

/* 
    fs package
    This fs(Filesystem) package is used to read, write, update contents on the
    filesystem
*/

// const fs = require("fs")
// const path = require("path")

// const filePath = path.join(__dirname, "a.txt")

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

/* 
    Why use path library?
        1. Cross platform joins (Windows has Users\Raghu\dir, linux has 
        Users/Raghu/dir)

        2. Gives you a bunch of helper functions (dirname)

        3. Normalises paths (converts /Users/Raghu/Projects/../../Projects to 
        /Users/Raghu/Projects)
*/

/* 
    External packages
    These are packages written and maintained by other people. You just see their
    work in your project

    For example
        1. Express
        2. chalk

    Semantic Versioning Format
    Every external package is updated incrementally. A specific version looks 
    something like follows:
        "chalk":"^5.3.0"

    The format is as follows - MAJOR.MINOR.PATCH

        - MAJOR - Major version changes indicate significant updates or breaking
        changes
        - MINOR - Minor version changes signify the addition of new features or 
        improverments in a backward-compatible manner
        - PATCH - Patch version changes include backward-compatible bug fixes or
        minor improvementsconst fs = require("fs")
// const path = require("path")

// const filePath = path.join(__dirname, "a.txt")

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })
 that address issues without adding new features or
        causing breaking changes

    
    Usage in package.json
    - "chalk":"^5.3.0" - npm will install any version that is compatible with 5.3.0
    but less than 6.0.0. This includes versions like 5.3.1, 5.4.0, 5.5.0, etc
    - "chalk":"5.3.0" - will install exact version
    - "chalk":"latest" - will install latest version

    package-lock.json
    The package-lock.json records the exact versions of all dependencies and their 
    dependencies (sub-dependencies) that are installed at the time when npm install
    was run

    Consistency: By locking down these versions, package-lock.json ensures that 
    every time someone installs dependencies (e.g., by running npm install), they get
    the exact same versions of packages. This prevents discrepancies that can arise
    from different versions being installed sheikh chilliin different environments
*/