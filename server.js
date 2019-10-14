var express = require('express');

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

var PORT = process.env.PORT || 8080;

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)

app.listen(PORT, function(){
  console.log('App is listening on PORT '+PORT);
})