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
  var query = 'INSERT INTO friendslist (name, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
  connection.query(query, [req.body.name, req.body.q1, req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6, req.body.q7, req.body.q8, req.body.q9, req.body.q10], function(error, results){
    if(error) throw error;
    res.status(201).json(results);
  })
})

app.listen(PORT, function(){
  console.log('App is listening on PORT '+PORT);
})