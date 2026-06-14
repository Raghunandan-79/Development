require("dotenv").config()

const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const app = express()

app.use(express.json())

const users = []

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "User signup sucessful"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(
        user => user.username === username && user.password === password
    )

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET)

        res.json({
            token: token
        })
    } else {
        return res.status(400).send({
            message: "Invalid username or password"
        })
    }
})

// function auth(req, res, next) {
//     const token = req.headers.token
//     const decoded = jwt.verify(token, JWT_SECRET)

//     if (decoded.username) {
//         req.username = decoded.username
//         next()
//     } else {
//         res.status(400).json({
//             message: "You are not logged in"
//         })
//     }
// }

// function getDetailsHandler(req, res) {
//     const user = users.find(
//         user => user.username === req.username
//     )

//     if (user) {
//         res.json({
//             username: user.username,
//             password: user.password
//         })
//     } else {
//         return res.status(400).send({
//             message: "Invalid token"
//         })
//     }
// }

function authMiddleware(req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET)

    if (decoded.username) {
        req.username = decoded.username
        next()
    } else {
        res.status(400).json({
            message: "You are not logged in"
        })
    }
}

function authHandler(req, res) {
    const user = users.find(
        user => user.username === req.username
    )

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        return res.status(400).send({
            message: "Invalid token"
        })
    }
}

app.get("/me", authMiddleware, authHandler)

app.listen(3000, () => {
    console.log(`Server running on port 3000`)
})