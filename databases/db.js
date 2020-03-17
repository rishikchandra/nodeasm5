var mysql = require('mysql');
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password:"sainandini2004",
    database : "rishik"
});
module.exports = connection;