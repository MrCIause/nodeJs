const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  // gets the root path and prints hello world.
  // res.status(200).send("Hello World!"); // 200 is the status code for OK. // sends the info to the user.
  res.status(500).json({ message: "Json message" }); // sends the json to the user.
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
