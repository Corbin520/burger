
// require the orm 
var orm = require("../config/orm");


// Pass in our query perams


// orm.updateOne("", function(result) {
//     var data = result;
//     console.log(data);
// });


module.exports = {
    getAllBurgers: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },
    createBurger: function (columnNames, columnValues) {
        orm.insertOne("burgers", columnNames, columnValues);
    }
};