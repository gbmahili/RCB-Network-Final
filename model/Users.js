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
    professions: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Professions"
        }
      ]

});


// This creates our model from the above schema, using mongoose's model method
var Users = mongoose.model("Users", UserSchema);

// Export the User model
module.exports = Users;
