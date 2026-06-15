/* 
    Context
    Code for this section: https://github.com/100xdevs-cohort-3/week-7-mongo

    In today's class, we will understand about  databases, and more specifically
    NoSQL databases.

    We'll learn about MongoDb and how you can use it to persist data in your 
    full stack app

    Things to learn
        1. Creating a free mongo db cloud server
        2. Connecting your full stack application to MongoDb
        3. Defining the schema
        4, mongoose
        5. CRUD operations
*/

/* 
    What are databases
    Datanases are organized collections of data that are structured to enable
    efficient storage, retrieval, and management of information

    Whenever you create a full stack app, you persist data in databases
    
    For example:
        1. User information
        2. TODOs of your todo app
        3. Posts for facebook
        4. Tweets for twitter

    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F260ec174-fdcd-4127-8b4d-0e72b1d57ac4%2FScreenshot_2024-09-14_at_6.33.19_PM.png?table=block&id=5ecf7dcd-85fb-407d-a904-a6574cabd915&cache=v2

    Types of databases
        - Relational Databases: Use tables to store data and relationships between
        data (e.g MySQL, PostgreSQL)

        - NoSQL Databases: Designed for more flexible data models and often used
        for big data or real-time web applications (e.g, MongoDB)

        - Graph Databases: Store data in nodes and edges to represent relationships
        (e.g Neo4j)

        - Vector Databases: Used in ML to store data in the form of embeddings
*/

/* 
    MongoDB and NoSQL databases
    NoSQL databases are a broad category of database systems that diverge from 
    the traditional relational model used in SQL databases

    They are designed to handle a variety of data models and workloads that may
    not fit neatly into the tabular schema of relational databases

    Properties:
        - Schema Flexibility: NoSQL databses often allow for a flexible schema
        meaning you can store data in formats that don't require a fixed structure

        - Scalability: Many NoSQL databases are designed to scale out horizontally,
        making it easier to distribute data across multiple servers and handle
        large volumes of traffic

    MongoDB
    MongoDB is a NoSQL database that uses a document-oriented approach. Data is 
    stored in flexible, JSON-like documents, which can have nested structures
    and varied fields

    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5af9696a-b003-4bfd-a9e3-2ac1eaaac9b0%2FScreenshot_2024-09-14_at_6.47.59_PM.png?table=block&id=1017dfd1-0735-807c-b3cb-d1359e65e9af&cache=v2
*/

/* 
    Creating a free MongoDB Server
        1. Signup on 
        2. Create a free M0 cluster
        3. Create a user
        4. Install MongoDB compass
        5. Put the connection URL to connect to the database
    
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8e921c66-77ed-414a-adc5-b8275c3ccafd%2FScreenshot_2024-09-14_at_6.27.13_PM.png?table=block&id=1017dfd1-0735-80c5-a93b-f7859f768f26&cache=v2

    Connection string
    mongodb+srv://username:password@cluster0.7kmvq.mongodb.net/
*/

/* 
    Seeding data in the DB
    Lets put some data in the cluster manually
        1. Create a new Database called todo-app
        2. Create two collections inside it
            1. users
            2. todos
        3. Seed some data inside the collections

    Users table
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8229f630-2bd2-4fdd-a567-6ab1a23f8117%2FScreenshot_2024-09-14_at_6.53.57_PM.png?table=block&id=0fb390c6-0cce-4de4-8f88-9d69fe88307f&cache=v2

    TODO table
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fcacfa297-330a-4099-b0d9-a572ba7653df%2FScreenshot_2024-09-14_at_6.54.01_PM.png?table=block&id=1017dfd1-0735-80af-9892-faff3b1b99cf&cache=v2     
*/

/* 
    CRUD Operations
    CRUD operations in MongoDB refer to the basic operations you can perform on
    documents withing a MongoDB database. CRUD stands for
        1. Create: Adding new documents to a collection
        2. Read: Retrieving documents from a collection
        3. Update: Modifying existing documents in a collection
        4. Delete: Removing documents from a collection

    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F39253341-ebf2-408b-93d7-138782f5c90f%2FScreenshot_2024-09-14_at_7.50.21_PM.png?table=block&id=1017dfd1-0735-801f-9dd7-dcc59d315923&cache=v2
*/

/* 
    Creating the backend of a todo app
    Lets now create a todo application with the data being persisted in the database

    - Initialise a new Node.js project
        npm init -y

    - Install dependencies
        npm install express mongoose
    
    - Create the skeleton for 4 routes
        - POST /signup
        - POST /login
        - POST /todo (authenticated)
        - GET /todos (authenticated)
        
        const express = require("express");

        const app = express();
        app.use(express.json());

        app.post("/signup", function(req, res) {
            
        });


        app.post("/signin", function(req, res) {

        });


        app.post("/todo", function(req, res) {

        });


        app.get("/todos", function(req, res) {

        });

        app.listen(3000);
    
    - Initialize a schema of your app in a new file (db.js)
        - Easy schema
            const mongoose = require("mongoose");

            const Schema = mongoose.Schema;
            const ObjectId = Schema.ObjectId;

            const User = new Schema({
            name: String,
            email: String,
            password: String
            });

            const Todo = new Schema({
                userId: ObjectId,
                title: String,
                done: Boolean
            });

            const UserModel = mongoose.model('users', User);
            const TodoModel = mongoose.model('todos', Todo);

            module.exports = {
                UserModel,
                TodoModel
            }
            
        - Hard schema
            const mongoose = require("mongoose");

            const Schema = mongoose.Schema;
            const ObjectId = Schema.ObjectId;

            const User = new Schema({
            name: String,
            email: {type: String, unique: true},
            password: String
            });

            const Todo = new Schema({
                userId: ObjectId,
                title: String,
                done: Boolean
            });

            const UserModel = mongoose.model('users', User);
            const TodoModel = mongoose.model('todos', Todo);

            module.exports = {
                UserModel,
                TodoModel
            }

        - Import the model in index.js
            const { UserModel, TodoModel } = require("./db");

        - Implement the /signup endpoint
            app.post("/signup", async function(req, res) {
                const email = req.body.email;
                const password = req.body.password;
                const name = req.body.name;

                await UserModel.create({
                    email: email,
                    password: password,
                    name: name
                });
                
                res.json({
                    message: "You are signed up"
                })
            });

        - Implement the /signin endpoint (need to install jsonwebtoken library)
            const JWT_SECRET = "s3cret";


            app.post("/signin", async function(req, res) {
                const email = req.body.email;
                const password = req.body.password;

                const response = await UserModel.findOne({
                    email: email,
                    password: password,
                });

                if (response) {
                    const token = jwt.sign({
                        id: response._id.toString()
                    })

                    res.json({
                        token
                    })
                } else {
                    res.status(403).json({
                        message: "Incorrect creds"
                    })
                }
            });

        - Implement the auth middleware (in a new file auth.js)
            const jwt = require("jsonwebtoken");
            const JWT_SECRET = "s3cret";

            function auth(req, res, next) {
                const token = req.headers.authorization;

                const response = jwt.verify(token, JWT_SECRET);

                if (response) {
                    req.userId = token.userId;
                    next();
                } else {
                    res.status(403).json({
                        message: "Incorrect creds"
                    })
                }
            }

            module.exports = {
                auth,
                JWT_SECRET
            }

        - Implement the POST todo endpoint
            const { auth, JWT_SECRET } = require("./auth");

        - Connect to your DB at the top of index.js
            const mongoose = require("mongoose");
            mongoose.connect("mongodb+srv://gasfgfafa:Aa5jxKhylWdFhv4v@cluster0.7kmvq.mongodb.net/todo-app")
*/

/* 
    Testing your app
    Try testing your app in Postman next

    Signup endpoint
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3be63f79-264d-4df8-8812-bd0ca52b0d5c%2FScreenshot_2024-09-14_at_7.41.02_PM.png?table=block&id=1017dfd1-0735-8092-bacb-ea45955d99a2&cache=v2

    Signin endpoint
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4f50cc32-8c89-497a-b7cc-7c2b5efad282%2FScreenshot_2024-09-14_at_7.41.10_PM.png?table=block&id=1017dfd1-0735-8021-b0a0-da4a251b9a9a&cache=v2

    Create TODO
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb6e467a6-19da-4c8c-8152-20babdf46496%2FScreenshot_2024-09-14_at_7.44.05_PM.png?table=block&id=1017dfd1-0735-80f1-96a6-d21f051de7c6&cache=v2

    Get TODOs
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F94b427c5-47dc-4b1b-865d-5de221cdf622%2FScreenshot_2024-09-14_at_7.44.21_PM.png?table=block&id=bb38d0a7-605a-448e-957f-76353a17932f&cache=v2

    Check the database
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe3a87d36-4c87-4e60-b7bf-f621684554ef%2FScreenshot_2024-09-14_at_7.44.43_PM.png?table=block&id=1017dfd1-0735-80de-a301-e564f989cf4a&cache=v2
*/

/* 
    Improvements
        1. Password is not hashed
        2. A single crash (duplicate email) crases the whole app
        3. Add more endpoints (mark todo as done)
        4. Add timestamp at which todo was created/the time it needs to be done by
        5. Relationships in Mongo
        6. Add validations to ensure email and password are in correct format
*/

/* 
    Hashing password

    Why should you hash passwords?
    Password hashing is a technique used to securely store passwords in a way that
    makes them difficult to recover or misuse. Instead of storing the actual 
    password, you store a hashed version of it

    salt
    A popular approach to hashing passwords involves using a hashing algorithm that
    incorporates a salt, a random value added to the password before hashing. This
    prevents attackers from using precomputed tables (rainbow tables) to crack 
    passwords
    
    bcrypt
    Bcrypt: It is a cryptographic hashing algorithm designed for securely hashing
    passwords. Developed by Niels Provos and David Maxieres in 1999, bcrypt 
    incorporates a salt and is designed to be computationally expensive, making
    brute-force attacks more difficult

    Base code
    https://github.com/100xdevs-cohort-3/week-7-mongo

    Adding password encryption
        - Install the bcrypt library
            https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7f4fba53-1604-4648-b38c-a2e96c6255a1%2FScreenshot_2024-09-15_at_6.43.20_PM.png?table=block&id=1027dfd1-0735-80dc-a276-dd4cefa5911b&cache=v2

        - Update the /signup endpoint
            app.post("/signup", async function(req, res) {
                const email = req.body.email;
                const password = req.body.password;
                const name = req.body.name;

                const hasedPassword = await bcrypt.hash(password, 10);

                await UserModel.create({
                    email: email,
                    password: hasedPassword,
                    name: name
                });
                
                res.json({
                    message: "You are signed up"
                })
            });

        - Password format
            https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F507c3334-4c13-494a-bb9f-c137de151688%2FScreenshot_2024-09-15_at_6.51.34_PM.png?table=block&id=1027dfd1-0735-80fc-9b6a-d9da8594d593&cache=v2

    
        So, putting it all together:
            - $2b$: version of bcrypt
            - 10$: Cost factor (saltRounds)
            - wyemvgfpjkEzg2dzuRyM9e: Salt value (base64 encoded).
            - LrQZnT69X/tj0KW/zM6TZhnrvT.TCne: Hashed password (base64 encoded).

        - Update the signin function
            app.post("/signin", async function(req, res) {
                const email = req.body.email;
                const password = req.body.password;

                const user = await UserModel.findOne({
                    email: email,
                });

                const passwordMatch = bcrypt.compare(password, user.password);
                if (user && passwordMatch) {
                    const token = jwt.sign({
                        id: user._id.toString()
                    }, JWT_SECRET);

                    res.json({
                        token
                    })
                } else {
                    res.status(403).json({
                        message: "Incorrect creds"
                    })
                }
            });
*/

/* 
    Error handling
    Right now, the server crashes if you sign up using duplicate email How can you
    fix this ?

    Approach #1 - Try catch
    In Javascript, a try..catch block is used for handling exceptions and errors
    that occur during the execution of code. It allows you to write code that
    can manage errors gracefully rather than crashing the application or causing
    unexpected behavior

        try {
            // Attempt to execute this code
            let result = riskyFunction(); // This function might throw an error
            console.log('Result:', result);
        } catch (error) {
            // Handle the error if one is thrown
            console.error('An error occurred:', error.message);
        } finally {
            // This block will always execute
            console.log('Cleanup code or final steps.');
        }

    - updated signin function
        app.post("/signup", async function(req, res) {
            try {
                const email = req.body.email;
                const password = req.body.password;
                const name = req.body.name;
            
                const hasedPassword = await bcrypt.hash(password, 10);
            
                await UserModel.create({
                    email: email,
                    password: hasedPassword,
                    name: name
                });
                
                res.json({
                    message: "You are signed up"
                })
            } catch(e) {
                res.status(500).json({
                    message: "Error while signing up"            
                })
            }
        });
*/

/* 
    Input validation
    In TypeScript, Zod is a library used for schema validation and parsing. It's 
    designed to help developers define, validate, and manage data structures in
    a type-safe manner

    Docs: https://zod.dev/
*/

/* 
    Relationships in mongo
    In MongoDB, data is related across collections using something called 
    references

    In our TODO application, each todo refers to an entry in the users table.
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5af9696a-b003-4bfd-a9e3-2ac1eaaac9b0%2FScreenshot_2024-09-14_at_6.47.59_PM.png?table=block&id=1027dfd1-0735-80b4-9b7c-cf754363fa34&cache=v2

    Our original schema
    const Todo = new Schema({
        userId: ObjectId,
        title: String,
        done: Boolean
    });

    Update schema with references
    const TodoSchema = new Schema({
        userId: { type: Schema.Types.ObjectId, ref: 'users' },
        title: String,
        done: Boolean
    });

    Benefits?
    You can pre-populate fields like user information sice you've defined the 
    exact relationship

    app.get("/todos", auth, async function(req, res) {
        const userId = req.userId;

        const todos = await TodoModel.find({
            userId
        }).populate('userId').exec();

        res.json({
            todos
        })
    });
*/