// Require Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
//Configure Express
const app = express();

// Declare a PORT
const PORT = process.env.PORT || 3001;

// // Serve up static assets
// app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// this test is going to be run from the client side server
app.post('/test', function(req, res){
  console.log(req.body);
})

// this test is going to be run from the server side server
app.get('/test', function(req, res){
  console.log('hi i called test');
})

// Listen to the port
app.listen(PORT, function(){
    console.log(`app listening to ${PORT}`);
})
