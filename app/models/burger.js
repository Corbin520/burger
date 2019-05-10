// create the code that will call the ORM functions using burger specific input for the ORM.

// require the orm 
var orm = require("../config/orm");


var burger = {}
// Pass in our query perams
orm.selectAll("", function(result) {
    var data = result;
    console.log(data);
});

orm.insertOne("", function(result) {
    var data = result;
    console.log(data);
});

orm.updateOne("", function(result) {
    var data = result;
    console.log(data);
});



module.exports = burger

