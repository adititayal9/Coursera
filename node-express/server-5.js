var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();
var dishrouter=require('./dishRouter');
var promotionrouter=require('./promoRouter');
var leadershiprouter=require('./leadershipRouter');

app.use(morgan('dev'));
app.use('/dishes',dishrouter);
app.use('/promotions',promotionrouter);
app.use('/leaderships',leadershiprouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log("Server running at http://"+hostname+":"+port);
});