const express = require("express")

const app = express()

// parse JSON bodies
app.use(express.json())

const fs = require("fs")
const path = require("path")

// route handlers
app.get('/', function(req, res) {
    res.send("Hello world")
})


// post users todo to the todo.json take todo from the body of the request
app.post("/todos", function(req, res) {
    const todo = req.body.todo

    if (!todo) {
        res.status(400).json({
            postMessage: "Todo is required"
        })

        return
    }

    const file = path.join(__dirname, "todo.json")

    fs.readFile(file, function(err, data) {
        if (err) {
            console.log(err)
            postMessage: "Error reading the file"
        }

        const todos = JSON.parse(data)

        if (todos.includes(todo)) {
            return res.status(400).json({
                postMessage: "Todo already exists"
            })
        }

        todos.push(todo)

        fs.writeFile(file, JSON.stringify(todos), function(err) {
            if (err) {
                res.status(500).json({
                    postMessage: "Error writing to file"
                })
            }

            res.json({
                postMessage: "Todo added successfully"
            })
        })
    })
})


// get todos
app.get("/todos", function(req, res) {
    const file = path.join(__dirname, "todo.json")

    fs.readFile(file, function(err, data) {
        if (err) {
            console.log(err)
            res.json({
                postMessage: "Error reading the file"
            })
        }

        const todos = JSON.parse(data)

        res.json({
            todos
        })
    })
})

// delete all todos
app.delete("/todos", function(req, res) {
    const file = path.join(__dirname, "todo.json")

    fs.readFile(file, function(err, data) {
        if (err) {
            console.log(err)
            return res.status(500).json({
                postMessage: "Error reqading the file"
            })
        }

        const todos = JSON.parse(data)

        todos.length = 0

        fs.writeFile(file, JSON.stringify(todos), function(err) {
            if (err) {
                return res.status(500).json({
                    postMessage: "Error writing to file"
                })
            }

            res.status(200).json({
                postMessage: "Deleted all todos"
            })
        })
    })
})


app.listen(3000)