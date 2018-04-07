// Require Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
// const signup = require("./routes/signup.js");
var logger = require("morgan");
const mongoose = require('mongoose');

// Require all models
var db = require("./model");

//Configure Express
const app = express();

// Declare a PORT
const PORT = process.env.PORT || 3001;

//Configure mongoose
//==================
// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
mongoose.Promise = Promise;
// Connect to the Mongo DB
const  MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/rcb";
mongoose.connect(MONGODB_URI)

//Configure middleware
//====================
// Use morgan logger for logging requests
app.use(logger("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// Use apiRoutes
// app.use("/api", signup);


// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  console.log(req.body)
    // Create a new user using req.body
    db.Users.create(req.body)
    
      .then(function(dbUser) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });

// Listen to the port
app.listen(PORT, function(){
    console.log(`app listening to ${PORT}`);
})
