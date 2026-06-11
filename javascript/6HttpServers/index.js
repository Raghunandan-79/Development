const express = require("express")

const app = express()

// parse JSON bodies
app.use(express.json())

const fs = require("fs")

// route handlers
app.get('/', function(req, res) {
    res.send("Hello world")
})


// post users todo to the todo.json take todo from the body of the request
app.post("/todos", function(req, res) {
    const todo = req.body.todo

    const file = __dirname + '/todo.json'
    
    let todos = []
    
    fs.writeFile(file, JSON.stringify([...todos, todo]), function(err) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Error writing to file"
            })
        } else {
            console.log("File written successfully")
        }
    })

    res.json({
        message: "Todo created successfully",
    })
})

// get todos
app.get("/todos", function(req, res) {
    const file = __dirname + '/todo.json'
    
    fs.readFile(file, function(err, data) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Error reading file"
            })
        } else {
            const todos = JSON.parse(data)
            res.json({
                todos
            })
        }
    })
})


app.listen(3000)