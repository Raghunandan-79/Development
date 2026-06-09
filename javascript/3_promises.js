/* 
    Topics:
        1. Classes in JS
        2. Revise callbacks
        3. Callback hell
        4. Promises
        5. Async await
*/

/* 
    Classes:
    In JavaScript, classes are a way to define blueprints for creating objects
*/

class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    area() {
        const area = this.width * this.height
        return area
    }

    paint() {
        console.log(`Painting with color ${this.color}`)
    }
}

const rect = new Rectangle(2, 4)
const area = rect.area()
console.log(area)
const rect2 = new Rectangle(2, 5, "Red")
rect2.paint()

/* 
    Key Concepts:
        1. Class Declaration:
            - You declare a class using the class keyword
            - Inside a class, you define properties (variables) and methods
            (functions) that will belong to the objects created from this
            class.
        
        2. Constructor:
            - A special method inside the class that is called when you create
            an instance (an object) of the class
            - It's used to initialize the properties of the object.

        3. Methods:
            - Functions that are defined inside the class and can be used by
            all instances of the class

        4. Inheritance:
            - Classes can inherit properties and methods from other classes,
            allowing you to create a new class based on an existing one.

        5. Static Methods:
            - Methods that belong to the class itself, not to instances of
            the class. You call them directly on the class.

        6. Getters and Setters:
            - Special methods that allow you to define how properties are
            accessed and modified
*/

/* 
    Inheritance in classes:
    Inheritance in Javascript classes allows one class to inherit properties
    and methods from another class. This mechanism enables code reuse, making
    it easier to create new classes that are based on existing ones, without
    having to duplicate code
*/

// Assignment #1 - Create a circle class
class Circle {
    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }

    area() {
        const area = this.radius * this.radius * Math.PI
        return area
    }

    paint() {
        console.log(`Painting with color ${this.color}`)
    }
}

const circle = new Circle(2, "red")
const areaOfCircle = circle.area()
console.log(area)

// Create a base shape class
// Base class
class Shape {
    constructor(color) {
        this.color = color
    }

    paint() {
        console.log(`Painting with color ${this.color}`)
    }

    area() {
        throw new Error(`The area method must be implemented in the subclass`)
    }

    getDescription() {
        return `A shape with color ${this.color}`
    }
}

// Rectangle class
class Rectangle1 extends Shape {
    constructor(width, height, color) {
        super(color)
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`
    }
}

// Circle class
class Circle1 extends Shape {
    constructor(radius, color) {
        super(color)
        this.radius = radius
    }

    area() {
        return this.radius * this.radius * Math.PI
    }

    getDescription() {
        return `A circle with radius ${this.radius}, and color ${this.color}`
    }
}

const circle1 = new Circle1(20, "Red")
console.log(circle1.area())
console.log(circle1.getDescription())


// Some more classes
// Date
const now = new Date()
console.log(now.toISOString())

// Maps
const map = new Map()
map.set("name", "Alice")
map.set("age", 30)
console.log(map.get("name"))
console.log(map)

/* 
    Promise class:
    Note: Calling a promise is easy, defining your own promise is where things
    get hard

    A promise in JavaScript is an object that represents the eventual 
    completion (or failure) of an asynchronous operation and its resulting
    value. Promises are used to handle asynchronous operations more effectively
    than traditional callback functions, providing a cleaner and more
    manageable way to deal with code that executes asyncronously, such as API
    calls, file I/O, or timers
*/

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function callback() {
    console.log("3 seconds have passed")
}

setTimeoutPromisified(3000).then(callback)

/* 
    Question: Write a code that
        1. logs hi after 1 second
        2. logs hello 3 seconds after step 1
        3. logs hello there 5 seconds after step 2
*/

// Solution (has callback hell)
// function logHii() {
//     setTimeout(function() {
//         console.log("Hii")

//         setTimeout(function() {
//             console.log("Hello")

//             setTimeout(function() {
//                 console.log("Hello there")
//             }, 5000)
//         }, 3000)
//     }, 1000)
// }

// logHii()

// Alt solution (doesnt really have callback hell)
// function logHii2() {
//     function step3Done() {
//         console.log("Hello there")
//     }

//     function step2Done() {
//         console.log("Hello")
//         setTimeout(step3Done, 5000)
//     }

//     function step1Done() {
//         console.log("Hi")
//         setTimeout(step2Done, 3000)
//     }

//     setTimeout(step1Done, 1000)
// }

// logHii2()

// Promisified version
function setTimeoutPromisified1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Solution 1 (has callback hell)
// setTimeoutPromisified1(1000).then(function() {
//     console.log("Hi")

//     setTimeoutPromisified1(3000).then(function() {
//         console.log("Hello")
        
//         setTimeoutPromisified1(5000).then(function() {
//             console.log("Hello there")
//         })
//     })
// })

// Alt solution
// setTimeoutPromisified1(1000)
//     .then(function() {
//         console.log("Hi")
//         return setTimeoutPromisified1(3000)
//     })
//     .then(function() {
//         console.log("Hello")
//         return setTimeoutPromisified1(5000)
//     })
//     .then(function() {
//         console.log("Hello there")
//     })

/* 
    Async await syntax
    The async and await syntax in JavaScript provides a way to write asynchronous
    code that looks and behaves like synchronous code, making it easier to read
    and maintian

    It builds on top of promises and allows you to avoid chaining .then() and 
    .catch() methods while still working with asynchronous operations.

    async/await is essentially syntactic sugar on top of promises
*/

/* 
    Assignment
    Write code that
        1. logs hi after 1 second
        2. logs hello 3 seconds after step 1
        3. logs hello there 5 seconds after step 2
*/

async function solve() {
    await setTimeoutPromisified1(1000)
    console.log("Hi")
    await setTimeoutPromisified1(3000)
    console.log("Hello")
    await setTimeoutPromisified1(5000)
    console.log("Hi there")
}

solve()

/* 
    Things to keep in mind:
        1. You can only call await inside a function if that function is async
        2. You cant have a top level await
*/

/* 
    Defining your own async function

    Question: Write a function that
        1. Reads the contents of a file
        2. Trims the extra space from the left and right
        3. Writed it back to the file
*/

const fs = require("fs")

// 1. Callback approach

// function cleanFile(filePath, cb) {
//     fs.readFile(filePath, "utf-8", function(err, data) {
//         data = data.trim();
//         fs.writeFile(filePath, data, function() {
//             cb();
//         })
//     })
// }

// function onDone() {
//     console.log("File has been cleaned")
// }

// cleanFile("a.txt", onDone)

// 2. Promisified approach
// function cleanFile(filePath, cb) {
//     return new Promise(function(resolve) {
//         fs.readFile(filePath, "utf-8", function(err, data) {
//             data = data.trim()

//             fs.writeFile(filePath, data, function() {
//                 resolve()
//             })
//         })
//     })
// }

// async function main() {
//     await cleanFile("a.txt")
//     console.log("Done cleaning file")
// }

// main()

// err first callback vs rejects in promises

/* 
    Callbacks
    fs.radFile function used an err first callback approach to propagate back
    errors
*/

// function afterDone(err, data) {
//     if (err) {
//         console.log("Error while reading file")
//     } else {
//         console.log(data)
//     }
// }

// fs.readFile("a.txt", "utf-8", afterDone)

/* 
    Promises
    Promises use the reject argument to propagate errors
*/

// function readFilePromisified(filePath) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filePath, "utf-8", function(err, data) {
//             if (err) {
//                 reject("Error while reading file")
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// function onDone(data) {
//     console.log(data)
// }

// function onError(err) {
//     console.log("Error: " + err)
// }

// readFilePromisified("a.txt").then(onDone).catch(onError)


/* 
    Assignment
    Create a promisified version of 
    setTimeout
    fetch
    fs.readFile
*/

function setTimeoutPromisified2(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration)
    })
}

function callback1() {
    console.log("10 seconds have passed")
}

setTimeoutPromisified2(10000).then(callback1)

function fetchPromisified(url) {
    return new Promise(function(resolve, reject) {
        fetch(url)
            .then(function(response) {
                if (response.ok) {
                    return response.json()
                } else {
                    reject("Error while fetching data")
                }
            })
            .then(function(data) {
                resolve(data)
            })
            .catch(function() {
                reject("Error while fetching data")
            })
    })
}

fetchPromisified("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        console.log(err)
    })

function readFilePromisified(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, "utf-8", function(err, data) {
            if (err) {
                reject("Error while reading file")
            } else {
                resolve(data)
            }
        })
    })
}

readFilePromisified("a.txt")
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        console.log(err)
    }) 