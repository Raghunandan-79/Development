// console.log("=============Basic + Functions=============")

// // Question 1: Write a function to find the sum of two numbers and print the result.
// function sum(a, b) {
//     return a + b
// }

// console.log(sum(5, 3))

// // Question 2: Write a function to subtract two numbers.
// function subtract(a, b) {
//     return a - b
// }

// console.log(subtract(5, 3))

// // Question 3: Write a function to multiply two numbers.
// function multiply(a, b) {
//     return a * b
// }

// console.log(5, 3)

// // Question 4: Write a function to divide two numbers.
// function divide(a, b) {
//     return a / b
// }

// console.log(5, 2)

// // Question 5: Write a function to find the square of a number.
// function square(n) {
//     return n * n
// }

// console.log(square(6))

// // Question 6: Write a function to check if a number is even or odd.
// function evenOrOdd(n) {
//     if (n % 2 === 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// console.log(evenOrOdd(69))

// // Question 7: Write a function to find the largest of two numbers.
// function largestOfTwoNumbers(a, b) {
//     if (a > b) {
//         return a + " is largest"
//     } else {
//         return b + " is largest"
//     }
// }

// console.log(largestOfTwoNumbers(5, 6))

// // Question 8: Write a function to find the largest of three numbers.
// function largestOfThreeNumbers(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1 + " is largest"
//     } else if (num2 > num1 && num2 > num3) {
//         return num2 + " is largest"
//     } else {
//         return num3 + " is largest"
//     }
// }

// console.log(largestOfThreeNumbers(9, 69, 12))

// // Question 9: Write a function to calculate the factorial of a number.
// function factorial(n) {
//     let fact = 1

//     for (let i = 1; i <= n; i++) {
//         fact *= i
//     }

//     return fact
// }

// console.log(factorial(5))

// // Question 10: Write a function to print numbers from 1 to n.
// function print1ToN(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }

// print1ToN(10)

// console.log()
// console.log("=============Loops + CPU Bound Tasks=============")

// // Question 11: Find the sum of numbers from 1 to n.
// function sum1ToN(n) {
//     let sum = 0

//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }

//     return sum
// }

// console.log(sum1ToN(5))

// // Question 12: Find the product of numbers from 1 to n.
// function product1ToN(n) {
//     let ans = 1

//     for (let i = 1; i <= n; i++) {
//         ans *= i
//     }

//     return ans
// }

// console.log(product1ToN(5))

// // Question 13: Count how many even numbers exist from 1 to n.
// function countEvenTillN(n) {
//     let cnt = 0

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             cnt++
//         }
//     }

//     return cnt
// }

// console.log(countEvenTillN(10))

// // Question 14: Count how many odd numbers exist from 1 to n.
// function countOddTillN(n) {
//     let cnt = 0

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 1) {
//             cnt++
//         }
//     }

//     return cnt
// }

// console.log(countOddTillN(10))

// // Question 15: Print the multiplication table of a number.
// function multiplicationTable(n) {
//     let current = 1

//     while (current <= 10) {
//         console.log(n + " x " + current + " = " + (n * current))
//         current++
//     }
// }

// multiplicationTable(2)

// // Question 16: Find the sum of squares from 1 to n.
// function sumOfSquaresTillN(n) {
//     let result = 0

//     for (let i = 1; i <= n; i++) {
//         result += Math.pow(i, 2)
//     }

//     return result
// }

// console.log(sumOfSquaresTillN(5))

// // Question 17: Reverse a number using loops.
// function reverseNumber(n) {
//     let ans = 0

//     while (n > 0) {
//         let currentDigit = n % 10
//         n = Math.floor(n / 10)
//         ans = (ans * 10) + currentDigit
//     }

//     return ans
// }

// console.log(reverseNumber(5669))

// // Question 18: Find whether a number is prime.
// function isPrime(n) {
//     if (n <= 1) {
//         return false
//     }

//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }

//     return true
// }

// if (isPrime(7)) {
//     console.log("Number is prime")
// } else {
//     console.log("Number is not prime")
// }

// // Question 19: Count total prime numbers between 1 and n.
// function countPrimeTillN(n) {
//     let cnt = 0

//     for (let i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             cnt++
//         }
//     }

//     return cnt
// }

// console.log(countPrimeTillN(10))

// // Question 20: Find the sum of all prime numbers between 1 and n.
// function sumOfPrimes(n) {
//     let sum = 0

//     for (let i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             sum += i
//         }
//     }

//     return sum
// }

// console.log(sumOfPrimes(10))

// console.log()
// console.log("=============Synchronous code=============")


// /* Question 21: Create three functions and call them one by one to understand 
//     synchronous execution order. */
// function fun1() {
//     console.log("First")
// }

// function fun2() {
//     console.log("Second")
// }

// function fun3() {
//     console.log("Third")
// }

// fun1()
// fun2()
// fun3()

// /* Question 22: Create nested function calls "(function1 → function2 → function3)" 
//     and observe output order. */
// function fun5() {
//     console.log("First")
// }

// function fun6() {
//     fun5()
//     console.log("Second")
// }

// function fun7() {
//     fun6()
//     console.log("Third")
// }

// fun7()

// /* Question 23: Write a heavy loop "(1 to 1,00,00,000)" and print "Done" afterward 
//     to observe blocking behavior. */
// let c = 1
// for (let i = 1; i <= 10000000; i++) {
//     c++
// }

// console.log("Done")

// /* Question 24: Read one file synchronously using "fs.readFileSync()" and print 
//     contents. */
// const fs = require("fs")

// let content = fs.readFileSync("a.txt", "utf-8")

// console.log(content)

// // Question 25: Read two files synchronously and print contents in order.
// let content1 = fs.readFileSync("a.txt", "utf-8")
// let content2 = fs.readFileSync("b.txt", "utf-8")
// console.log(content)
// console.log(content2)

// // Question 26: Read three files synchronously and check execution order.
// let content3 = fs.readFileSync("a.txt", "utf-8")
// let content4 = fs.readFileSync("b.txt", "utf-8")
// let content5 = fs.readFileSync("c.txt", "utf-8")

// console.log(content3)
// console.log(content4)
// console.log(content5)

// /* Question 27: Print "Start" before reading a file and "End" after 
// reading to observe sync behavior. */
// console.log("Start")
// let content6 = fs.readFileSync("a.txt", "utf-8");
// console.log(content6)
// console.log("End")

// console.log()
// console.log("=============Asynchronous Code + Callbacks=============")

// // 28. Read a file asynchronously using fs.readFile().
// content = fs.readFile("a.txt", "utf-8", function(err, contents) {
//     if (err) {
//         console.log("File not found")
//     } else {
//         console.log(contents)
//     }
// })

// function logContent(err, content) {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log(content)
//     }
// }

// // 29. Read two files asynchronously and observe output order.
// fs.readFile("a.txt", "utf-8", logContent)
// fs.readFile("b.txt", "utf-8", logContent)

// // 30. Print "Start" and "End" around an async file read and observe execution.
// console.log("Start")
// fs.readFile("a.txt", "utf-8", logContent)
// fs.readFile("b.txt", "utf-8", logContent)
// console.log("End")

// // 31. Create a callback function separately and pass it to readFile().
// fs.readFile("c.txt", "utf-8", logContent)

// // 32. Handle file not found error using callback.
// fs.readFile("doesnotexist.txt", "utf-8", logContent)

// // 33. Read three files asynchronously and compare with synchronous version.
// fs.readFile("a.txt", "utf-8", logContent)
// fs.readFile("b.txt", "utf-8", logContent)
// fs.readFile("c.txt", "utf-8", logContent)

// // 34. Print file length after reading asynchronously.
// function logContent1(err, content) {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("Content:")
//         console.log(content)
//         console.log("Length: " + content.length)
//     }
// }

// console.log(fs.readFile("a.txt", "utf-8", logContent1))

// // 35. Create an async function that reads a file and prints "Reading Complete".
// function logContent2(err, content) {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("Content:")
//         console.log(content)
//         console.log("Reading Complete")
//     }
// }

// console.log(fs.readFile("a.txt", "utf-8", logContent2))

// console.log()
// console.log("=============setTimeout Practice=============")

// // 36. Print "Hello after 2 seconds" using setTimeout().
// function printHello() {
//     console.log("Hello after 2 seconds")
// }

// setTimeout(printHello, 2000)

// // 37. Print three messages with different delays.
// function printHello1() {
//     console.log("Hello ji")
// }

// function printHello2() {
//     console.log("Hello ji, kya haal hai?")
// }

// function printHello3() {
//     console.log("Hello ji, How are you")
// }

// setTimeout(printHello1, 3000)
// setTimeout(printHello2, 4000)
// setTimeout(printHello3, 5000)

// // 38. Print "Start" -> delayed message -> "End" and observe order.
// console.log("Start")
// function delayedMessage() {
//     console.log("Delayed Message")
// }
// setTimeout(delayedMessage, 6000)
// console.log("End")

// // 39. Create a function and pass it to setTimeout().
// function passToSetTimeout() {
//     console.log("Function passed to set timeout")
// }

// setTimeout(passToSetTimeout, 1000)

// // 40. Use nested setTimeout() calls.
// setTimeout(function nestedSetTimeout() {
//     setTimeout(function helloFromNestedSetTimeout() {
//         console.log("Hello from nested set timeout")
//     }, 2000)

//     console.log("Hello from outer nest")
// }, 1000)

// // 41. Simulate a countdown from 5 to 1 using setTimeout().
// function countdown5To1() {
//     setTimeout(function() {
//         console.log(5)
//     }, 1000)

//     setTimeout(function() {
//         console.log(4)
//     }, 2000)

//     setTimeout(function() {
//         console.log(3)
//     }, 3000)

//     setTimeout(function() {
//         console.log(2)
//     }, 4000)

//     setTimeout(function() {
//         console.log(1)
//     }, 5000)
// }

// countdown5To1()

// // 42. Print current time every 2 seconds using setTimeout().
// // function printCurrentTime() {
// //     console.log(new Date().toLocaleTimeString())

// //     setTimeout(printCurrentTime, 2000)
// // }

// // call printCurrenTime() only when needed
// // printCurrentTime()

// console.log()
// console.log("=============Functional Arguments / Higher Order Functions=============")

// // 43. Create a calculator using function arguments (add, subtract, multiply, divide).
// function sum4(a, b) {
//     return a + b;
// }

// function multiply1(a, b) {
//     return a * b;
// }

// function subtract1(a, b) {
//     return a - b;
// }

// function divide1(a, b) {
//     return a / b;
// }

// function doOperation(a, b, op) {
//     return op(a, b)
// }

// // 44. Pass multiplication function to a generic operation function.
// console.log(doOperation(5, 5, multiply1))

// // 45. Add modulus (%) operation to calculator.
// function modulus1(a, b) {
//     return a % b
// }

// // 46. Add power operation (a^b) to calculator.
// function power1(a, b) {
//     return Math.pow(a, b)
// }

// // 47. Create a function performTask(a, b, task) and pass different operations.
// function performTask(a, b, task) {
//     return task(a, b)
// }

// console.log(performTask(5, 3, modulus1))
// console.log(performTask(2, 3, power1))

// // 48. Pass an anonymous function as an argument to another function.
// function doOperation(a, b, op) {
//     return op(a, b)
// }

// console.log(
//     doOperation(10, 5, function(a, b) {
//         return a + b
//     })
// )

// /* 49. Create a function that takes another function and runs it after printing 
//     "Executing...". */
// function executeTask(task) {
//     console.log("Executing...")
//     task()
// }

// function greet() {
//     console.log("Hello")
// }

// executeTask(greet)

// /* 50. Make a mini calculator where operation is decided by function argument 
//     and print the result. */
// function add(a, b) {
//     return a + b
// }

// function subtract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }

// function calculator(a, b, operation) {
//     return operation(a, b)
// }

// console.log("Addition:", calculator(10, 5, add))
// console.log("Subtraction:", calculator(10, 5, subtract))
// console.log("Multiplication:", calculator(10, 5, multiply))
// console.log("Division:", calculator(10, 5, divide))