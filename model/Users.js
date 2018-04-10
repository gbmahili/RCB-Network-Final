// Require mongoose
const mongoose = require("mongoose");
// Instanciate our schema
var Schema = mongoose.Schema;
// Create a new article from our schema
var UserSchema = new Schema({

    firstName: {
        type : String
    },

    lastName: {
        type: String
        
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
      password: {
        type: String,
        trim: true,
        required: "Password is Required"
      }, 
      gender: {
          type: Boolean
      },
      birthday:{
          type: Date,
          default: Date.now
      },
      country:{
          type: String
      },
      telephone:{
          type: String
      },
      housenumber: {
          type: String
      },
      streetName: {
          type: String
      },
      city: {
          type: String
      },
      state: {
          type: String
      },
      zipcode: {
          type: String
      }

});

// Export our new NewsArticle schema to be used
const Users = mongoose.model("Users", UserSchema);

// Export the User model
module.exports = Users;