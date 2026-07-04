import "dotenv/config";
import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client(process.env.PG_SQL_CONNECTION_STRING);

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;


        await pgClient.query(`BEGIN;`);

        const response = await pgClient.query(insertQuery, [
            username,
            email,
            password,
        ]);
        const user_id = response.rows[0].id;

        const addressInsertResponse = await pgClient.query(addressInsertQuery, [
            city,
            country,
            street,
            pincode,
            user_id,
        ]);

        await pgClient.query(`COMMIT;`);
    } catch (e) {
        return res.status(500).json({
            message: "Unable to signup",
        });
    }

    res.json({
        message: "You have successfully signed up",
    });
});

app.get("/metadata", async (req, res) => {
    const id = req.query.id;

    const query1 = `SELECT username, email, id FROM users WHERE id=$1`;
    const query2 = `SELECT * FROM addresses WHERE user_id=$1`;

    await pgClient.query(`BEGIN;`);
    const response1 = await pgClient.query(query1, [id]);
    const response2 = await pgClient.query(query2, [id]);
    await pgClient.query(`COMMIT`)

    res.json({
        user: response1.rows[0],
        address: response2.rows
    });
});

app.get("/better-metadata", async (req, res) => {
    const id = req.query.id;
    // const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users
    // JOIN addresses ON users.id = addresses.user_id
    // WHERE users.id = $1;`;

    const query = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = $1`

    const response = await pgClient.query(query, [id]);
    
    res.json({
        data: response.rows
    })
});

async function main() {
    try {
        await pgClient.connect();
        console.log("Successfully connected with database");
    } catch (e) {
        console.log("Unable to connect to database");
        return;
    }

    app.listen(3000, () => {
        console.log("Server is up and running on port 3000");
    });
}

main();
