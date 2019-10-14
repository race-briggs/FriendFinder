var connection = require('../config/connection.js');

module.exports = function(app){

  app.get('/api/survey', function(req, res){
    var query = 'SELECT * FROM friendslist';
    connection.query(query, function(error, results){
      res.json(results);
    })
  })

  app.post('/api/survey', function (req, res) {
    console.log(req.body);
    var query = 'INSERT INTO friendslist (name, image, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
    connection.query(query, [req.body.name, req.body.image, req.body.q1, req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6, req.body.q7, req.body.q8, req.body.q9, req.body.q10], function (error, results) {
      if (error) throw error;
      res.status(201).json(results);
    })
  })

}