require("dotenv").config()
const express = require("express")
const { UserModel, TodoModel } = require("./db")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const { todo } = require("node:test")
const { auth, JWT_SECRET } = require("./auth")
const app = express()

mongoose.connect(process.env.MONGO_CONNECT)

app.use(express.json())

app.post("/signup", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are logged in"
    })
})

app.post("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user)

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId
    const description = req.body.title

    await TodoModel.create({
        description,
        userId
    })

    res.json({
        message: "Todo created successfully"
    })
})

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})