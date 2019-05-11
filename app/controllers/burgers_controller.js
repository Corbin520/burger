// require express

var path = require("path");

var express = require("express");

var router = express.Router();

var burger = ("../models/burger.js");


// create out routes


    // router.get
    router.get("/", function (req, res) {
        res.render(path.join(__dirname, "../views/layouts/main.handlebars"))
    });


        // router.post
            // router.put
                // router.delete

    // Export routes to server.js

module.exports = router
