var path = require("path");

var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// create out routes

// router.get
router.get('/', function (req, res) {
    burger.getAllBurgers(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});


router.post('/burger/add', function (req, res) {
    console.log(req.body);
    
    burger.createBurger([
        "burger_name",
        "devoured"
    ], [
        req.body.burgerName, false
    ]);
    
    res.redirect('/');
    // eventually push this to page
})

module.exports = router;
