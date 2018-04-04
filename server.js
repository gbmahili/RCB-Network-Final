// Require Dependencies
const express = require('express');

//Configure Express
const app = express();

// Declare a PORT
const PORT = process.env.PORT || 3001;

// test route that renders hello on the page 
app.get('/', function(req, res){
    res.send('hello');
});
// Listen to the port
app.listen(PORT, function(){
    console.log(`app listening to ${PORT}`);
})
