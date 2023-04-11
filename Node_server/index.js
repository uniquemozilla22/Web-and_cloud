import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./database.js";
import Pets from "./Schema/Pets.schema.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
dotenv.config();
connectDatabase();
app.get("/", (req, res) => {
  for (let i = 1; i < 10000000; i++) {
    console.log("Server :" + i);
  }
  res.json("<h1>Started the server</h1>");
});

app.get("/pets", async (req, res) => {
  console.log("pets");
  const pets = await Pets.find({});
  res.send(pets);
});

app.post("/pets", async (req, res) => {
  try {
    const { type, price } = req.body;
    console.log({ ...req });
    console.log(type, price);
    const pet = new Pets({ type, price });
    await pet.save().then((pets) => {
      res.send(pets);
    });
  } catch (e) {
    res.send({ ...e });
  }
});

app.listen(3000, () => {
  console.log("Server is being hosted in the 3000 port.");
});
