// Require Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const apiRoutes = require("./routes/apiRoutes");
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

// Use apiRoutes
app.use("/api", apiRoutes);

// Listen to the port
app.listen(PORT, function(){
    console.log(`app listening to ${PORT}`);
})
