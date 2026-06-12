/* 
    What to learn
        1. Headers
        2. Fetch API in the browser
        3. Query params, Creating out own HTTP server (Again). Does simple math
        4. Middlewares
            1. Create a middleware function that logs each incoming request's HTTP
            method, URL, and timestamp to the console
            2. Count total number of requests
        5. Commonly used middlewares
            1. express.json/bodyParser.json
            2. cors
*/

/* 
    Headers
    HTTP headers are key-value pairs send between a client(like a web browser) and
    a server in an HTTP request or response. They convey metadata about the request
    or response, such as content type, auth information etc

    Common headers
        1. Authorization (sends the user auth information)
        2. Content-Type: Type of information client is sending (json, binary etc)
        3. Referer: Which URL is this request coming from

    Request headers
    The headers the client sends out in the request are known as request headers

    Response headers
    The headers that the server responds with are known as the response headers
*/

/* 
    Fetch API
    There are 2 high level ways a browser can send requests to an HTTP server:
        1. From the browser URL (Default GET request):
            - When you type a URL into the browser's address bar and press Enter,
            the browser sends an HTTP GET request to the server. This request is 
            used to retrieve resources like HTML pages, images, or other content

        2. From an HTML form or Javascript (various request types):
            - HTML Forms: When a user submits a form on a webpage, the browser
            sends an HTTP request based on the form's method attribute, which can be
            GET or POST. Forms with method="POST" typically send data to the server
            for processing (e.g form submissions)

            - JavaScript (Fetch API): Javascript running in the browser can make
            HTTP requests to a server using APIs the fetch API. These requests
            can be of various types (GET, POST, PUT, DELETE, etc) and are commonly
            used for asynchronous data retrieval and manipulation (e.g AJAX requests)
    
    Fetch request examples
    Server to send the request to: 
    https://jsonplaceholder.typicode.com/posts/1 (GET request)
*/

// async function fetchPosts() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const json = await res.json();
//     document.getElementById("posts").innerHTML = json.title;
// }

// fetchPosts();

// using axios (external library)
// async function fetchPosts() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//     document.getElementById("posts").innerHTML = res.data.title;
// }

// fetchPosts();

/* 
    Create an HTTP server
    It should have 4 routes
        1. http://localhost:3000/multiply?a=1&b=2
        2. http://localhost:3000/add?a=1&b=2
        3. http://localhost:3000/divide?a=1&b=2
        4. http://localhost:3000/subtract?a=1&b=2

    Inputs given at end after ? are known as query parameters (usually used in GET 
    requests)

    The way to get them in an HTTP route is by extracting them from the req argument
    (req.query.a, req.query.b)

    Steps to follow
        - initialize node project
            npm init -y

        - install dependencies
            npm install express

        - create an empty index.js
            touch index.js
        
        - write code to create 4 endpoints
            const express = require("express");

            const app = express();

            app.get("/sum", function(req, res) {

            });

            app.get("/multiply", function(req, res) {
                
            });

            app.get("/divide", function(req, res) {
                

            });

            app.get("/subtract", function(req, res) {

            });

            app.listen(3000);

        - fill in the handler body
            const express = require("express");

            const app = express();

            app.get("/sum", function(req, res) {
                const a = req.query.a;
                const b = req.query.b;

                res.json({
                    ans: a + b
                })
            });

            app.get("/multiply", function(req, res) {
                const a = req.query.a;
                const b = req.query.b;
                res.json({
                    ans: a * b
                })
            });

            app.get("/divide", function(req, res) {
                const a = req.query.a;
                const b = req.query.b;
                res.json({
                    ans: a / b
                })

            });

            app.get("/subtract", function(req, res) {
                const a = req.query.a;
                const b = req.query.b;
                res.json({
                    ans: a - b
                })
            });

            app.listen(3000);

        - Test it in the browser
*/


/* 
    Middlewares
    In Express.js, middleware refers to functions that have access to the request
    object (req), response object (res), and the next function in the application's
    request-response cycle. Middleware functions can perform a variety of tasks,
    such as
        1. Modifying the request or response objects
        2. Ending the request-response cycle
        3. Calling the next middleware function in the stack
    
    Try running this code and see if the logs comes or not
        app.use(function(req, res, next) {
            console.log("request received");
            next();
        })

        app.get("/sum", function(req, res) {
            const a = parseInt(req.query.a);
            const b = parseInt(req.query.b);

            res.json({
                ans: a + b
            })
        });
*/

// Modifying the request
// app.use(function(req, res, next) {
//     req.name = "harkirat"
//     next();
// })

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// Ending the request/response cycle
// app.use(function(req, res, next) {
//     res.json({
//         message: "You are not allowed"
//     })
// })

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// calling the next middleware function in the stack
// app.use(function(req, res, next) {
//     console.log("request received");
//     next();
// })

// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

/* 
    Route specific middlewares
    Route-specific middleware in Express.js refers to middleware functions that
    are applied only to specific routes or route groups, rather that being used
    globally across the entire application
*/

// const express = require('express');
// const app = express();

// // Middleware function
// function logRequest(req, res, next) {
//   console.log(`Request made to: ${req.url}`);
//   next();
// }

// // Apply middleware to a specific route
// app.get('/special', logRequest, (req, res) => {
//   res.send('This route uses route-specific middleware!');
// });

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// NOTE: Only the /special endpoint runs the middleware

/* 
    Assigments on middleware
    Try these out yourself.
        1. Create a middleware function that logs each incoming request’s HTTP method, 
        URL, and timestamp to the console

        2. Create a middleware that counts total number of requests sent to a server. 
        Also create an endpoint that exposes it
*/

/* 
    Commonly used middlewares
    Through your journey of writing express servers, you'll find some commonly
    available (on npm) middlewares that you might want to use

    1.express.json
    The express.json() middleware is a built-in middleware function in Express.js
    used to parse incoming request bodies that are formatted as JSON. This middleware
    is essential for handling JSON payloads sent by clients in POST or PUT requests.
*/

// const express = require('express');
// const app = express();

// // Use express.json() middleware to parse JSON bodies
// app.use(express.json());

// // Define a POST route to handle JSON data
// app.post('/data', (req, res) => {
//   // Access the parsed JSON data from req.body
//   const data = req.body;
//   console.log('Received data:', data);

//   // Send a response
//   res.send('Data received');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

/* 
    NOTE: 
    1. Try converting the calculator assigment to use POST endpoints.
    Check if it works with/without the express.json middleware

    2. Express uses bodyParser under the hood
    https://github.com/expressjs/express/blob/master/lib/express.js#L78C16-L78C26
*/

/* 
    CORS - Cross Origin Resource Sharing
    Cross-Origin Resource Sharing (CORS) is a security feature implemented by web
    browsers that controls how resources on a web server can be requested from 
    another domain. It's a crucial mechanism for managing cross-origin requests
    and ensuring secure interactions between different origins on the web

    Cross origin request from the browser
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2d2c5c1d-d6d4-4033-974f-c5085459c2bd%2FScreenshot_2024-08-31_at_7.36.42_PM.png?table=block&id=17c24995-18b8-4347-99b3-6c00f3befcd1&cache=v2


    Same request from Postman
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F98b1b56d-d0b4-475c-899c-ca9992bb8185%2FScreenshot_2024-08-31_at_7.37.08_PM.png?table=block&id=c4ed4f14-e7d1-4ce9-8a31-14cb0e807744&cache=v2  
*/

// Real world example: Create an HTTP Server

// Create an HTTP server
// const express = require("express");

// const app = express();

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.listen(3000);

// Create an index.html file (public/index.html)
// <!DOCTYPE html>
// <html>

// <head>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.6/axios.min.js"></script>
// </head>

// <body>
//   <div id="posts"></div>
//   <script>
//     async function sendRequest() {
//       const res = await axios.get("http://localhost:3000/sum?a=1&b=2");
//     }

//     sendRequest();
//   </script>
// </body>

// </html>

// Serve the HTML file on a different port
/* 
    cd public
    npx serve
*/
// you will notice the cross origin request fails

// Add cors as a dependency
// npm i cors

// Use the cors middleware
// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.listen(3000);

// You dont need cors if the frontend and backend are on the same domain

// Try serving frontend on the same domain
// const express = require("express");
// const app = express();

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/public/index.html");
// });

// app.listen(3000);

/* 
    Go to localhost:3000, notice that the underlying request doesnt fail with
    cors (even though we don't have the cors middleware)
*/