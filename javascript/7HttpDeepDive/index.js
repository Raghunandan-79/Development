// const express = require("express")

// const app = express()

// // sum endpoint
// app.get("/sum/:a/:b", function(req, res) {
//     const a = req.params.a
//     const b = req.params.b
//     const sum = Number.parseInt(a) + Number.parseInt(b)

//     res.json({
//         "ans": sum
//     })
// })

// // multiply endpoint
// app.get("/multiply", function(req, res) {
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)

//     res.json({
//         "ans": a * b
//     })
// })

// // divide endpoint
// app.get("/divide", function(req, res) {
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)

//     console.log(typeof(a))

//     res.json({
//         "ans": a / b
//     })
// })

// // subtract endpoint
// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)

//     res.json({
//         "ans": a - b
//     })
// })


// Middlewares
// const express = require("express")
// const app = express()

// let requestCount = 0

// function requestIncreaser(request, response, next) {
//     requestCount = requestCount + 1
//     console.log("The number of requests are: " + requestCount)

//     response.json({
//         message: "I ended the request early"
//     })

//     next()
// }

// function realSumHandler(request, response) {
//     const a = parseInt(request.query.a)
//     const b = parseInt(request.query.b)

//     response.json({
//         ans: a + b
//     })
// }

// function realMultiplyHandler(request, response) {
//     const a = parseInt(request.query.a)
//     const b = parseInt(request.query.b)

//     response.json({
//         ans: a * b
//     })
// }

// app.get("/sum", requestIncreaser, realSumHandler)

// app.use(requestIncreaser)

// app.get("/multiply", realMultiplyHandler)


// Assignment on middlewares
// Create a middleware function that logs each incoming request’s HTTP method, 
// URL, and timestamp to the console
// const express = require("express")
// const app = express()

// function logRequestDetails(request, response, next) {
//     const time = new Date().toLocaleString()
//     const url = `${request.protocol}://${request.get('host')}${request.originalUrl}`;
//     const method = request.method

//     console.log(`${time} ${url} ${method}`)

//     next()
// }

// app.use(logRequestDetails)

// function sumHandler(request, response) {
//     const a = parseInt(request.query.a)
//     const b = parseInt(request.query.b)

//     response.json({
//         ans: a + b
//     })
// }

// app.get("/sum", sumHandler)

// Create a middleware that counts total number of requests sent to a server. 
// Also create an endpoint that exposes it
// const express = require("express")
// const app = express()

// let requestCount = 0

// function requestIncreaser(request, response, next) {
//     requestCount = requestCount + 1

//     next()
// }

// function showTotalRequests(request, response) {
//     response.json({
//         message: `Total number of requests are ${requestCount}`
//     })
// }

// function sumHandler(request, response) {
//     const a = parseInt(request.query.a)
//     const b = parseInt(request.query.b)

    
//     response.json({
//         ans: a + b
//     })
// }

// app.get('/totalRequests', showTotalRequests)
// app.get('/sum', requestIncreaser, sumHandler)


// commonly used middleware
// const express = require("express")
// const app = express()

// // use express.json() middleware to parse JSON bodies
// app.use(express.json())

// app.post('/data', (req, res) => {
//     const data = req.body
//     console.log("Received data: " + data)

//     res.send("Data received")
// })

// app.post('/sum', (req, res) => {
//     const a = parseInt(req.body.a)
//     const b = parseInt(req.body.b)

//     res.json({
//         ans: a + b
//     })
// })

// app.listen(3000, () => {
//     console.log("Server running on port 3000")
// })

// CORS - Cross Origin Resource Sharing
/* 
    Assignment:
        1. Create a backend server in node.js that returns the sum endpoint
        2. Write an HTML file, that hits the backend server using the fetch api
*/
const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:38291"]
}))

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        sum: a + b
    })
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
})