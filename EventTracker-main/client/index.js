const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/template.html"));
});

app.get("/1.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/template.html"));
});

app.get("/2.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/template.html"));
});

app.listen(8000, () => {
  console.log("the client has been launched");
});
