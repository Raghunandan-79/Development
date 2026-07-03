import "dotenv/config";
import { Client } from "pg";
import express  from "express";

const app = express();
app.use(express.json());
const pgClient = new Client(process.env.PG_SQL_CONNECTION);

// const pgClient2 = new Client({
//     user: process.env.PG_SQL_USER,
//     password: process.env.PG_SQL_PASS,
//     port: Number(process.env.PG_SQL_PORT),
//     host: process.env.PG_SQL_HOST,
//     database: process.env.PG_SQL_DATABASE,
//     ssl: true
// });

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`;

        await pgClient.query(insertQuery, [username, email, password]);
    } catch(e) {
        return res.status(500).json({
            message: "Username or email already exists"
        })
    }
    
    res.json({
        message: "You have signed up"
    });
})

async function main() {
    try {
        await pgClient.connect();

        console.log("Successfully connected to database");
    } catch(e) {
        console.log("Unable to connect to databse");
        return;
    }

    app.listen(3000, () => {
        console.log("App is running on port 3000");
    });
}

main();