
// require the orm 
var orm = require("../config/orm");



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