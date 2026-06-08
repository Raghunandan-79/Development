// Normal Functions in JS

// Find sum of two numbers
function sum(a, b) {
    return a + b
}

let ans = sum(2, 3)
console.log(ans)

// Find sum from 1 to a number
function sum1(n) {
    let ans = 0
    
    for (let i = 1; i <= n; i++) {
        ans += i
    }

    return ans
}

ans = sum1(5)
console.log(ans)

// Above all is a synchrounous code of js means it runs one line at a time
// single execution context

/* 
    Synchronous code: It is executed line by line, in the order it's written
    Each operation waits for the previous one to complete before moving on
    to the next one
*/

function sum2(n) {
    let ans = 0

    for (let i = 0; i <= n; i++) {
        ans = ans + i
    }

    return ans;
}

const ans1 = sum2(100)
console.log(ans1)
const ans2 = sum2(1000)
console.log(ans2)
const ans3 = sum2(10000)
console.log(ans3)

/* 
    I/O heavy operations

    I/O (Input/Output) heavy operations refer to tasks in a computer program
    that involve a lot of data transfer between the program and external 
    systems or devices. These operations usually require waiting for data
    to be read from or written to sources like disks, networks, databases, or
    other external devices, which can be time-consuming compared to in-memory
    computations
    
    Examples of I/O heavy operations:
        1. Reading a file
        2. Starting a clock
        3. HTTP Requests
*/

const fs = require("fs")

const contents = fs.readFileSync("a.txt", "utf-8")
console.log(contents)

/* 
    CPU bound tasks:
    CPU-bound tasks are operations taht are limited by the speed and power of the CPU.
    These tasks require significant computation and processing power, meaning that
    the performance bottlenect is the CPU itself
*/

let ans4 = 0
for (let i = 1; i <= 1000000; i++) {
    ans4 = ans4 + i
}
console.log(ans4)

/* 
    A real world example of a CPU intensive task is running for 3 miles. Your legs/
    brain have to constantly be engaged for 3 miles while you run
*/

/* 
    I/O bound tasks:
    I/O-bound tasks are operations that are limited by the system's input/output
    capabilities, such as disk I/O, network I/O, or any other form of data transfer.
    These tasks spend most of their time waiting for I/O operations to complete
*/
const fs1 = require("fs")
const contents1 = fs.readFileSync("a.txt", "utf-8")
console.log(contents1) 

/* 
    A real world example of an I/O bound task would be boiling water. I don't have to
    do much, I just have to put the water on the kettle, and my brain can be occupied
    elsewhere.
*/

// Synchronously (one by one)
const fs2 = require("fs")

const content1 = fs.readFileSync("a.txt", "utf-8")
console.log(content1)

const content2 = fs.readFileSync("b.txt", "utf-8")
console.log(content2)

const content3 = fs.readFileSync("a.txt", "utf-8")
console.log(content3)

// Start all tasks together, and wait for them to finish
fs2.readFile("a.txt", "utf-8", function(err, content) {
    console.log(content)
})

fs2.readFile("b.txt", "utf-8", function(err, content) {
    console.log(content)
})

fs2.readFile("a.txt", "utf-8", function(err, content) {
    console.log(content)
})


// Functional arguments
// Write a calculator program that adds, subtracts, multiplies and divides
// two arguments

// Approach #1 -> Calling the respective function
function sum3(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function doOperation(a, b, op) {
    return op(a, b)
}

console.log(sum3(1, 2))

// Approach #2 -> Passing in what needs to be done as an argument
function sum4(a, b) {
    return a + b;
}

function multiply1(a, b) {
    return a * b;
}

function subtract1(a, b) {
    return a - b;
}

function divide1(a, b) {
    return a / b;
}

function doOperation(a, b, op) {
    return op(a, b)
}

console.log(doOperation(1, 5, sum4))

/* 
    Asynchronous code, callbacks:
    Let's look at the code to read from a file asynchrounously. Here we pass in
    a function as an argument. This function is called a callback since the
    function gets called back when the file is read    
*/

function afterFileRead(err, contents) {
    if (err) {
        console.log("File not found!")
    } else {
        console.log(contents)
    }
}

fs2.readFile("aas.txt", "utf-8", afterFileRead)

const content4 = fs2.readFile("b.txt", "utf-8", function(err, contents) {
    if (err) {
        console.log("File not found")
    } else {
        console.log(contents)
    }
})

/* 
    setTimeout:
    setTimeout is another asynchronous function that executes a certain code
    after some time
*/

function run() {
    console.log("I will run after 2 seconds")
}

setTimeout(run, 2000)

console.log("I will run immediately")

/* 
    JS Architecture for async code:

    1. Call Stack:
        - The call stack is a data structure that keeps a track of the 
        function calls in your program. It operates in a "Last In, First
        Out (LIFO) manner, meaning the last function that was called is 
        the first one to be executed and removed from the stack"

        - When a function is called, it gets pushed onto the call stack.
        When the function completes, it's popped off the stack

    2. Web APIs:
        - Web APIs are provided by the browser (or the Node.js runtime)
        and allow you to perform tasks that are outside the scope of the
        JavaScript language itself, such as making network requests,
        setting timers, or handling DOM events.

    3. Callback Queue:
        - The callback queue is a list of tasks (callbacks) that are 
        waititng to be executed once the call stack is empty. These tasks
        are added to the queue by Web APIs after they completed their 
        operations

    4. Event loop:
        - The event loop constantly checks if the call stack is empty. If
        it is, and there are callbacks in the callback queue, it will 
        push the first callback from the queue onto the call stack for
        execution
*/

function first() {
    console.log("First")
}

function second() {
    first()
    console.log("Second")
}

second()

/* 
    Before next: Try to read about a promisified version of 
    setTimeout
    fetch 
    fs.readFile
*/