const express = require("express");
const app = express();
const db = require("./db/db");
const bodyParser = require("body-parser");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000!");
});
