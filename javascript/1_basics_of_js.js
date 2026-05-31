/*
    Properties of JS:

    1. Interpreted: JS is an interpreted language, meaning it's is executed line 
    by line at runtime by the JS engine in the brower or server environment, 
    rather than just being compiled into machine code beforehand

    Upsides: 
        1. There is one less step to run the code
    
    Downsides:
        1. Performance overhead
        2. More prone to runtime errors
    
    2. Dynamically Typed: Variables in JS are not bound to a specific data type.
    Types are determined at runtime and can change as the program executes

    3. Single threaded: JS executes code in a single-threaded environment, meaning
    it processes one task at a time.

    4. Garbage collected: JS automatically manages memory allocation and
    deallocation through garbage collection, which helps prevent memory leaks by
    automatically reclaiming memory used by objects no longer in use

    Memory management:
        a. Garbage collector: 
            1. Written by smart people
            2. Usually no dangiling pointers/memory issues
            3. You can't do manual memory management
            4. Examples: Java, JS
        
        b. Manual:
            1. You allocate and deallocate memory yourself
            2. Can lead to dangiling pointers/memory issues
            3. Learning curve is high since you have to do manual memory management
            4. Examples: C/C++

        c. The rust way:
            1. Rust has its own ownership model for memory managemen
            2. Makes it extremely safe to memory errors

    Conclusion:
    
    Is JS a good language?
    Ans: Yes and no. It is a beginner friendly, but has a lot of performance
    overhead. Bun is trying to solve a lot of this but there's a long way to go
    before JS can compete with languages like C++/Rust
*/


// Syntax of Javascript

// variables: Variables are used to store data. In JS, you declare variables 
// using var, let or const

let firstName = "Raghu"; // varibale that can be reassigned
const age = 30; // constant variable that cannot be reassigned
var isStudent = true; // oelder way to declare variables, function-scoped

console.log(firstName);
console.log(age);
console.log(isStudent);

isStudent = "Harkirat";
isStudent = 10;
console.log(isStudent);

// continue from 59:30