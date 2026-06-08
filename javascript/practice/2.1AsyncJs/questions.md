# 50 Practice Questions (Node.js / Terminal Only)

## Basics + Functions

1. Write a function to find the sum of two numbers and print the result.
2. Write a function to subtract two numbers.
3. Write a function to multiply two numbers.
4. Write a function to divide two numbers.
5. Write a function to find the square of a number.
6. Write a function to check if a number is even or odd.
7. Write a function to find the largest of two numbers.
8. Write a function to find the largest of three numbers.
9. Write a function to calculate the factorial of a number.
10. Write a function to print numbers from 1 to `n`.

## Loops + CPU Bound Tasks

11. Find the sum of numbers from 1 to `n`.
12. Find the product of numbers from 1 to `n`.
13. Count how many even numbers exist from 1 to `n`.
14. Count how many odd numbers exist from 1 to `n`.
15. Print the multiplication table of a number.
16. Find the sum of squares from 1 to `n`.
17. Reverse a number using loops.
18. Find whether a number is prime.
19. Count total prime numbers between 1 and `n`.
20. Find the Fibonacci sequence till `n` terms.

## Synchronous Code Practice

21. Create three functions and call them one by one to understand synchronous execution order.
22. Create nested function calls (`function1 → function2 → function3`) and observe output order.
23. Write a heavy loop (`1 to 1,00,00,000`) and print `"Done"` afterward to observe blocking behavior.
24. Read one file synchronously using `fs.readFileSync()` and print contents.
25. Read two files synchronously and print contents in order.
26. Read three files synchronously and check execution order.
27. Print `"Start"` before reading a file and `"End"` after reading to observe sync behavior.

## Asynchronous Code + Callbacks

28. Read a file asynchronously using `fs.readFile()`.
29. Read two files asynchronously and observe output order.
30. Print `"Start"` and `"End"` around an async file read and observe execution.
31. Create a callback function separately and pass it to `readFile()`.
32. Handle file not found error using callback.
33. Read three files asynchronously and compare with synchronous version.
34. Print file length after reading asynchronously.
35. Create an async function that reads a file and prints `"Reading Complete"`.

## setTimeout Practice

36. Print `"Hello after 2 seconds"` using `setTimeout()`.
37. Print three messages with different delays.
38. Print `"Start"` → delayed message → `"End"` and observe order.
39. Create a function and pass it to `setTimeout()`.
40. Use nested `setTimeout()` calls.
41. Simulate a countdown from 5 to 1 using `setTimeout()`.
42. Print current time every 2 seconds using `setTimeout()`.

## Functional Arguments / Higher Order Functions

43. Create a calculator using function arguments (`add`, `subtract`, `multiply`, `divide`).
44. Pass multiplication function to a generic operation function.
45. Add modulus (`%`) operation to calculator.
46. Add power operation (`a^b`) to calculator.
47. Create a function `performTask(a, b, task)` and pass different operations.
48. Pass an anonymous function as an argument to another function.
49. Create a function that takes another function and runs it after printing `"Executing..."`.
50. Make a mini calculator where operation is decided by function argument and print the result.

## Bonus Challenges

* Read a file asynchronously, then after 2 seconds print `"Task Complete"`.
* Create a CPU-heavy task and compare it with `setTimeout()` behavior.
* Read 3 files asynchronously + use callbacks + print execution order.
* Build a configurable calculator where operation function is passed dynamically.

Run all programs in terminal using:

node filename.js
