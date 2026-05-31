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

// Data Types

let number = 42;                // Number
console.log(number);

let string = "Hello world";      // string
console.log(string);

let isActive = false;            // boolean
console.log(isActive);

let numbers = [1, 2, 3];        // array
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);

// Operators

let sum = 10 + 5;
let isEqual = (10 === 10);
let isTrue = (true && false);

console.log(sum)
console.log(isEqual)
console.log(isTrue)

// Functions
// function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("Raghu");
console.log(message);

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumOfTwoNumbers(5, 2))
let ans = sumOfTwoNumbers(3, 2)
console.log(ans)


function canVote(age) {
    if (age > 18) {
        console.log("You can vote")
    } 
    else {
        console.log("You can not vote")
    }
}

canVote(21)


// Loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// while loop
let j = 0
while (j <= 5) {
    console.log(j)
    j++
}

// arrays in js => arrays/vectors in c++ => vectors in rust => arraylist in java

// Objects in js => Map in c++ => hashmap in rust => hashmap in java

let user = {
    firstName: "Raghu",
    age: 21
}

console.log(user["firstName"])
console.log(user.firstName, user.age)
user["firstName"] = "Raghunandan"
console.log(user.firstName)

// Array of Objects
const users = [{
    firstName: "Raghu",
    age: 21
}, {
    firstName: "Daksh",
    age: 20
}, {
    firstName: "Pankaj",
    age: 21
}, {
    firstName: "Rohinish",
    age: 21
}
]

console.log(users[0].firstName)
console.log(users[2].firstName)
console.log(users[1].firstName)
console.log(users[3].firstName)
console.log(users[0])
console.log(users)

let arr = ["harkirat", 21, {
    firstName: "harkirat",
    age: 21,
    cities: ["delhi", "chandigarh", "bangalore", {
        country: "malaysia",
        city: "kuala lumpur"
    }]
}]

console.log(arr[0])
console.log(arr[2].cities[3].city)


// Objects of Objects
const user1 = {
    firstName: "Raghu",
    age: 21,
    address: {
        city: "Jammu",
        country: "India",
        address: "Amphalla"
    }
}

const city = user1.address.city
console.log(city)


console.log()
console.log()
console.log("==============Assignment Questions==============")

/* 
    Question 1: Create a variable for each of the following: your favorite color, 
    your height in centimeters, and whether you like pizza. Use appropriate 
    variable declarations (let, const, or var). Try logging it using console.log
*/

const favouriteColor = "White"
let heightInCentimeters  = 170
const likesPizza = true

console.log("Favorite color:", favouriteColor)
console.log("Height in cm:", heightInCentimeters)
console.log("Likes Pizza:", true)

/* 
    Question 2: Write a function sum that finds the sum of two numbers. 
*/

function sum2(num1, num2) {
    return num1 + num2
}

console.log("Sum of two numbers:", sum2(5, 2))

/*
    Question 3: Write a function called canVote that returns true or false if the 
    age of a user is > 18
*/

function canVote(age) {
    if (age > 18) {
        return "You can vote"
    } else {
        return "You cannot vote"
    }
}

console.log(canVote(19))

/*
    Question 4: Write an if/else statement that checks if a number is even or odd. 
    If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

function isEven(num) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log("Number is:", isEven(9))

/* 
    Question 5: Write a function called sum that finds the sum from 1 to a number
*/

function sumTillN(num) {
    let sum = 0

    for (let i = 1; i <= num; i++) {
        sum += i
    }

    return sum
}

console.log("Sum of numbers from 1 to 5 is:", sumTillN(5))


console.log()
console.log()


console.log("==============Assignment Questions: Complex types==============")
/* 
    Question 6: Write a function that takes a user as an 
    input and greets them with their name and age
*/

function greetUser(user) {
    return "Good Afternoon" +  " " + user.fullName + " " + user.age + "."
}

let user3 = {
    fullName: "Raghunandan Sharma",
    age: 21
}

console.log(greetUser(user3))


/*
    Question 7: Write a function that takes a new object as input which has name, 
    age and gender and greets the user with their gender 
    (Hi Mr/Mrs/Others harkirat, your age is 21), Also tell the user if they are 
    legal to vote or not
*/

function greetUser2(user) {
    if (user.gender === "male" && user.age >= 18) {
        return "Hi Mr " + user.fullName + ", " + "your age is " + user.age + " " + ", you can vote."
    } 
    else if (user.gender === "male" && user.age < 18) {
        return "Hi Mr " + user.fullName + ", " + "your age is " + user.age + " " + ", you cannot vote."
    } 
    else if (user.gender === "female" && user.age >= 18) {
        return "Hi Mrs " + user.fullName + ", " + "your age is " + user.age + " " + ", you can vote."
    } 
    else if (user.gender === "female" && user.age < 18) {
        return "Hi Mrs " + user.fullName + ", " + "your age is " + user.age + " " + ", you cannot vote."
    } 
    else if (user.gender === "others" && user.age >= 18) {
        return "Hi Others " + user.fullName + ", " + "your age is " + user.age + " " + ", you can vote."
    } 
    else {
        return "Hi Others " + user.fullName + ", " + "your age is " + user.age + " " + ", you cannot vote."
    }
}

let user2 = {
    fullName: "Raghunandan Sharma",
    age: 17,
    gender: "male"
}

console.log(greetUser2(user2))

/*
    Question 8: Write a function that takes an array of numbers as input, and 
    returns a new array with only even values. Read about filter in JS
*/

function returnEvenArray(arr) {
    arr2 = arr.filter(num => num % 2)

    return arr2
}

arr = [1, 2, 3, 4, 5]
console.log(returnEvenArray(arr))

/*
    Question 9: Write a function that takes an array of users as inputs and 
    returns only the users who are more than 18 years old
*/

function returnAdults(users) {
    arr = []

    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            arr.push(users[i])
        }
    }

    return arr
}

const users1 = [{
    fullName: "Raghunandan Sharma",
    age: 21
}, {
    fullName: "Daksh",
    age: 18
}, {
    fullName: "Pankaj Singh",
    age: 20
}, {
    fullName: "Rohinish Sharma",
    age: 17
}]

console.log(returnAdults(users1))

/*
    Question 10: Create a function that takes an objects of objects as input,
    and returns the users whose age > 18 and are male
*/

function getAdultMales(users) {
    let users1 = {}

    for (let key in users) {
        if (users[key].age > 18 && users[key].gender === "male") {
            users1[key] = users[key]
        }
    }

    return users1
}

const users3 = {
    user1: { name: "Raghu", age: 20, gender: "male" },
    user2: { name: "Priya", age: 25, gender: "female" },
    user3: { name: "Aman", age: 16, gender: "male" },
    user4: { name: "Rahul", age: 22, gender: "male" }
};

console.log(getAdultMales(users3));