import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Healthy"
    });
});

async function main() {
    try {
        app.listen(3000, () => {
            console.log("Server is up and running on port 3000");
        });
    } catch(e) {
        console.log("Unable to start the server");
    }
}

main();