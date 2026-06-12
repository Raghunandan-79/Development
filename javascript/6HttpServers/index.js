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

    if (!todo) {
        res.status(400).json({
            message: "Todo is required"
        })
        return
    }
    
    const file = __dirname + '/todo.json'

    fs.readFile(file, function(err, data) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Error reading file"
            })
        }
        const todos = JSON.parse(data)
        todos.push(todo)

        fs.writeFile(file, JSON.stringify(todos), function(err) {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: "Error writing file"
                })
            } else {
                res.json({
                    message: "Todo added successfully"
                })
            }
        })
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