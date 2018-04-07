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
        
    }
});

// Export our new NewsArticle schema to be used
const Users = mongoose.model("Users", UserSchema);

// Export the User model
module.exports = Users;