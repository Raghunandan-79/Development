const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { UserModel, TodoModel } = require("./db")
const { auth, JWT_SECRET } = require("./auth")
const { z } = require("zod")
const app = express()

mongoose.connect(process.env.MONGO_CONNECT)

app.use(express.json())

app.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30).regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            {
                message:
                    "Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character"
            }
        )
    }).strict()

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
        return res.json({
            message: "Incorrect form",
            error: parsedDataWithSuccess.error
        })
    }

    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    let errorThrown = false

    try {
        const hashedPassword = await bcrypt.hash(password, 5)

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })

        
    } catch (e) {
        res._construct(400).json({
            message: "User with email already exists"
        })

        errorThrown === true
    }

    if (!errorThrown) {
        res.json({
            message: "You are signed in"
        })
    }
})

app.post("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne({
        email: email
    })

    if (!user) {
        return res.status(403).json({
            message: "User doesnot exists"
        })
    }

    const passwordMatched = await bcrypt.compare(password, user.password)

    console.log(user)

    if (passwordMatched) {
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