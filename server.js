require('dotenv').config();

var express = require('express');
var mysql = require('mysql');


var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: DATABASE_PW,
  database: 'friends_db'
})

connection.connect(function(error){
  if(error){
    console.log(error);
  }
})



app.listen(PORT, function(){
  console.log('App is listening on PORT '+PORT);
})