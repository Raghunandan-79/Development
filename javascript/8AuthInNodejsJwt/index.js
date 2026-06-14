require("dotenv").config()

const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const app = express()

app.use(express.json())

const users = []

app.post("/signup", function(req, res) {
    const username = req.body.username
    const password = req.body.password

    if (users.find(u => u.username === username)) {
        return res.json({
            message: "User with username exits"
        })
    }

    users.push({
        username: username,
        password: password
    })

    console.log(users)
    res.json({
        message: "Signup complete"
    })
})

app.post("/signin", function(req, res) {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(
        user => user.username === username && user.password === password
    )

    if (user) {
        // Create a token
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        console.log(users)
        
        res.json({
            token: token
        })
    } else {
        return res.status(403).send({
            message: "Invalid username or password" 
        })
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.token  // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET) // json object
    const username = decodedInformation.username

    const user = users.find(
        user => user.username === username
    )

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        return res.status(400).send({
            message: "Can't find the user"
        })
    }
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`)
})