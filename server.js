require('dotenv').config();

var express = require('express');
var mysql = require('mysql');

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: process.env.DATABASE_PW,
  database: 'friends_db'
})

connection.connect(function(error){
  if(error){
    console.log(error);
  }
})

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)

app.listen(PORT, function(){
  console.log('App is listening on PORT '+PORT);
})