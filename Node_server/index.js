import express from "express";

const app = express();

app.get("/", (req, res) => {
  for (let i = 1; i < 10000000; i++) {
    console.log("Server :" + i);
  }
  res.send("<h1>Started the server</h1>");
});

app.listen(3000, () => {
  console.log("Server is being hosted in the 3000 port.");
});
