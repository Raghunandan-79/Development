require("dotenv").config()
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

function auth(request, response, next) {
    const token = request.headers.token
    const decodedData = jwt.verify(token, JWT_SECRET)

    if (decodedData) {
        request.userId = decodedData.id
        next()
    } else {
        response.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}