/* 
    What is DOM?
    The DOM, or Document Object Model, is a programming interface for web documents
    It represents the structure of a web page as a tree of objects

    Why DOM?
    The DOM abstracts the structure of the document into a tree of objects, allowing
    scripts to manipulate the content and structure dynamically. This abstraction
    enables more complex interactions and functionalities beyond just static HTML

    Static HTML
    As the name suggests, static HTML represents HTML that does not change.

    For example:
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>replit</title>
            <link href="style.css" rel="stylesheet" type="text/css" />
            </head>
            
            <body>
            <h1>Todo list</h1>
            <h4>1. Take class</h4>
            <h4>2. Go out to eat</h4>
            <div>
                <input type="text"></input>
                <button>Add Todo</button>
            </div>
            <script src="script.js"></script>
            </body>
            
        </html>

    if you click on the Add Todo button, nothing happens

    Dynamic HTML:
    How can you update the elements of the page dynamically?

    Assignment
    When the user clicks on Add todo button, a new TODO should be added

    document object
    In the browser, the document object is a fundamental part of the Document Object
    Model (DOM). It represents the web page currently loaded in the browser and 
    provides a way to interact with and manipulate its content

    Fetching elements
    There are 5 popular methods available for fetching DOM elements
        - querySelector
        - querySelectorAll
        - getElementById
        - getElementByClassName
        - getElementsByClassName
*/

// // 1. Fetching the title
// const title = document.querySelector('h1')
// console.log(title.innerHTML)

// // 2. Fetching the first TODO
// const firstTodo = document.querySelector('h4')
// console.log(firstTodo.innerHTML)

// // 3. Fetching the second TODO
// const secondTodo = document.querySelectorAll('h4')[1]
// console.log(secondTodo.innerHTML)

// function addTodo() {
//     const inputElement = document.querySelector("input")
//     const value = inputElement.value
//     console.log(value)
// }

/* 
    Updating elements
        - .innerHTML - used for updating the HTML inside an element
        - .textContent - used for updating the text content inside an element
*/

// Assignment - Update the first todo's contents

// const firstTodo = document.querySelector("h4")
// firstTodo.innerHTML = "1. Don't take class"

// let ctr = 0

// function callback() {
//     document.querySelectorAll("h4")[2].innerHTML = ctr
//     ctr = ctr + 1
// }

/* 
    Deleting elements
        - removeChild - removes a specific node of a parent
        - onclick - function that triggers whenever you click on a button
*/

// Assignment - Add a delete button right next to the todo that deletes that todo
// function deleteTodo(index) {
//     const element = document.getElementById("todo-" + index)
//     element.parentNode.removeChild(element)
// }