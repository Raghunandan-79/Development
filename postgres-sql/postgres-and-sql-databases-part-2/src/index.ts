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
