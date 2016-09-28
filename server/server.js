var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

console.log('process.env', process.env);

var apiKey = process.env.ETSY_KEY;
console.log(apiKey, 'apiKey');




app.get('/api/users/shopListings', function(req,res){

  request('https://openapi.etsy.com/v2/shops/Graymalkyn/listings/active?includes=Images&api_key=' + apiKey, function (error, response, body){
    if (!error && response.statusCode ==200){
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    }
    else {
      console.log(error, 'status code', response.statusCode);
    }
  });
});


app.get('/api/users', function(req,res){

  request('https://openapi.etsy.com/v2/users/93078486?api_key=' + apiKey, function (error, response, body){
    if (!error && response.statusCode ==200){
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    }
    else {
      console.log(error, 'status code', response.statusCode);
    }

  });
});

app.get('/api/shop', function(req,res){

  request('https://openapi.etsy.com/v2/shops/Graymalkyn?api_key=' + apiKey, function (error, response, body){
    if (!error && response.statusCode ==200){
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    }
    else {
      console.log(error, 'status code', response.statusCode);
    }

  });
});

app.get('/api/listings', function(req,res){

  request('https://openapi.etsy.com/v2/listings/478934593?api_key=' + apiKey, function (error, response, body){
    if (!error && response.statusCode ==200){
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    }
    else {
      console.log(error, 'status code', response.statusCode);
    }

  });
});


//********************************

// Below used for testing and reference.

// app.get('/api/users/findAllUsers', function(req,res){
//
//   request('https://openapi.etsy.com/v2/users?keywords=Mark%20Shuler&api_key=' + apiKey + , function (error, response, body){
//     if (!error && response.statusCode ==200){
//       res.setHeader('Content-Type', 'application/json');
//       res.send(body);
//     }
//   });
// });

// app.get('/api/listings/active', function(req,res){
//
//   request('https://openapi.etsy.com/v2/listings/active?includes=Images(url_75x75)&api_key=' + apiKey, function (error, response, body){
//     if (!error && response.statusCode ==200){
//       res.setHeader('Content-Type', 'application/json');
//       res.send(body);
//     }
//   });
// });

//********************************



// app.listen(5000, function (){
//   console.log('listening on port 5000');
// });


var port = process.env.PORT || 5500;


app.listen(port, function() {
  console.log('listening on port', port);
});
