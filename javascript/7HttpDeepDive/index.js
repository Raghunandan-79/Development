const express = require("express")

const app = express()

// sum endpoint
app.get("/sum/:a/:b", function(req, res) {
    const a = req.params.a
    const b = req.params.b
    const sum = Number.parseInt(a) + Number.parseInt(b)

    res.json({
        "ans": sum
    })
})

// multiply endpoint
app.get("/multiply", function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        "ans": a * b
    })
})

// divide endpoint
app.get("/divide", function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    console.log(typeof(a))

    res.json({
        "ans": a / b
    })
})

// subtract endpoint
app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        "ans": a - b
    })
})

app.listen(3000)