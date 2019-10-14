require('dotenv').config();

var express = require('express');
var mysql = require('mysql');
var path = require('path');

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

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/public/pages/index.html'));
})

app.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, '/public/pages/survey.html'));
});

app.post('/api/survey', function(req, res){
  console.log(req.body);
})

app.listen(PORT, function(){
  console.log('App is listening on PORT '+PORT);
})