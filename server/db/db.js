const mysql = require("mysql");
const db = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "ba130506701db0",
  password: "c3af1550",
  database: "heroku_0685896544e70c1",
});

module.exports = db;
