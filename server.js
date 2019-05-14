
var express = require("express");
var exphbs = require("express-handlebars");

var path = require("path")
var mysql = require("mysql");

// var PORT = process.env.PORT || 8080;
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes from burger_controller.js
var routes = require("./controllers/burgers_controller");

app.use(routes)

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});





































