// Require Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
// const signup = require("./routes/signup.js");
var logger = require("morgan");
const mongoose = require('mongoose');
const routes = require("./routes");
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
//app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, "client/build")));
// Use apiRoutes
app.use(routes);
// For uploading pictures
require("./routes/uploadPicture")(app);
require("./routes/uploadResume")(app);
require("./routes/Server.UserLogin")(app);
require("./routes/Server.UserSignup")(app);
require("./routes/Server.UpdateProfile")(app);
require('./routes/getprofessions')(app);
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
})
// Listen to the port
app.listen(PORT, function(){
    console.log(`app listening to ${PORT}`);
});
// End of the server call.