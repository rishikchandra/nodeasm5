var express = require('express');
var app = express();
app.use(express.json());
var connection = require('./databases/db.js');
var routes = require('./routes/user.js');


app.use(routes);

connection.connect(function(){
    console.log("Database Connected....");
});
app.listen(3000,()=>{console.log('server running')});