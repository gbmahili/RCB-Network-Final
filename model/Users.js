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
    UserProfilePicture: {
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
          type: String
      },
      birthday:{
          type: String
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
      },
    UserProfilePicture: {
          type: String
      }

});


// This creates our model from the above schema, using mongoose's model method
var Users = mongoose.model("Users", UserSchema);

// Export the User model
module.exports = Users;
