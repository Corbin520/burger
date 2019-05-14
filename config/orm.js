// Working


// reqire the connection from 'connections.js'
var connection = require("../config/connection")

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.


    // Overview: We will create a variable called 'orm', we will create a method within the variable
    // that will take in arguments, a query string and pass our arguements into the query. We create
    // a variable that will hold our query peramitors. We then create the connection to the DB and
    // then pass in our query variable then our arguements. We will then call a function and gather
    // the result or the err and console.log it.


    
    module.exports = {

        // Selecting everything from the DB
        selectAll: function(tableName, cb) {

            // String we want to use to search out DB
            var queryString = "SELECT * FROM ??"; 
            console.log(queryString)
            // these will replace the questions marks on the query string
            connection.query(queryString, [tableName], function(err, result) {
                if (err) throw err;
                // grab our result
                cb(result);
            });
        },

        // Inserting the users input into the Datbase 
        insertOne: function(tableName, columnNames, columnValues) {
            var queryString = 'INSERT INTO ?? (??) VALUES (?)'
            // console.log(queryString);
            var q = connection.query(queryString, [tableName, columnNames, columnValues], function(err, result) {
                if (err) throw err;
            })
        },

 
        // updateOne: function(arg1, arg2, arg3) {
        //     var queryString = "SELECT * FROM ??";
        //     console.log(queryString);
        //     connection.query(queryString, [arg1, arg2, arg3], function(err, result) {
        //         if (err) throw err;
        //         console.log(result)
        //     })
        // }
    };

// export this to 'burgers.js