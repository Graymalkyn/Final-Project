var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

console.log('process.env', process.env);

var apiKey = process.env.ETSY_KEY;

app.get('/api/listings/active', function(req,res){

  request('https://openapi.etsy.com/v2/listings/active?api_key=' + apiKey, function (error, response, body){
    if (!error && response.statusCode ==200){
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    }
  });
});

app.listen(5000, function() {
  console.log('listening on port 5000.');
});
