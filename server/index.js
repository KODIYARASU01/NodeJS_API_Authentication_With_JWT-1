import express from "express";
import dotenv from "dotenv";

dotenv.config();

//Initialize Our App

let app = express();

//Server listening port number
let PORT = process.env.PORT || 3000;

//Our Route

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

//Create Server to Listen

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
