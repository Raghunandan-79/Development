import express from "express";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Healthy",
  });
});

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const client = new PrismaClient({ adapter });

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const age = req.body.age;
  const city = req.body.city;

  try {
    await client.user.create({
      data: {
        username: username,
        password: password,
        age: age,
        city: city,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error while signing up",
    });
  }

  res.json({
    message: "Successfully signed up",
  });
});

app.get("/users", async (req, res) => {
  try {
    const response = await client.user.findMany();
    res.json({
      response
    })
  } catch(e) {
    return res.status(500).json({
      message: "Unable to find users"
    })
  }
})

app.delete("/delete", async (req, res) => {
  const id = Number(req.query.id);

  try {
    await client.user.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error while deleting user",
    });
  }

  res.json({
    message: "Successfully deleted user",
  });
});

app.post("/updateUsername", async (req, res) => {
  const id = Number(req.query.id);
  const username = req.body.username;

  try {
    await client.user.update({
      where: {
        id: id,
      },
      data: { 
        username: username
      }
    })
  } catch(e) {
    return res.status(500).json({
      message: "Error while updating the user"
    })
  }

  res.json({
    message: "Successfully updated the username"
  })
})

async function main() {
  try {
    app.listen(3000, () => {
      console.log("Server is up and running on port 3000");
    });
  } catch (e) {
    console.log("Unable to start the server");
  }
}

main();
