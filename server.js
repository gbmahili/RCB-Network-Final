// Require Dependencies
const express = require('express');
const path = require('path');
//Configure Express
const app = express();

// Declare a PORT
const PORT = process.env.PORT || 3001;

// test route that renders hello on the page 
// the following route is made for the server to communicate with the request coming in from the client side.
app.get('/test', function(req, res){
    res.send('Hello Im a test call created by Veena.  \nRight now we are connected to the server, Im displayed via server call.\nI believe the next thing we shall focus on is to get the appropriate file via the server call using router');
  })
  
// Listen to the port
app.listen(PORT, function(){
    console.log(`app listening to ${PORT}`);
})
