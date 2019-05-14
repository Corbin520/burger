
// Connection to Database

// Working!

var mysql = require("mysql");

var dbUrl = process.env.JAWSDB_URL || "root:Password1@localhost/burgers_db";

var connection = mysql.createConnection(dbUrl);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;