import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./database.js";

const app = express();
dotenv.config();
connectDatabase();
app.get("/", (req, res) => {
  for (let i = 1; i < 10000000; i++) {
    console.log("Server :" + i);
  }
  res.json("<h1>Started the server</h1>");
});

const pets = [
  {
    id: 1,
    type: "dog",
    price: 249.99,
  },
  {
    id: 2,
    type: "cat",
    price: 124.99,
  },
  {
    id: 3,
    type: "fish",
    price: 0.99,
  },
];
app.get("/pets", (req, res) => {
  res.send(pets);
});
app.listen(3000, () => {
  console.log("Server is being hosted in the 3000 port.");
});
