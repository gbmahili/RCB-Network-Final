var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ProfessionSchema object
// This is similar to a Sequelize model
var ProfessionSchema = new Schema({
  // `title` must be of type String
  title: String,
  // `resume` must be of type String
  resume: String
});

// This creates our model from the above schema, using mongoose's model method
var Professions = mongoose.model("Professions", ProfessionSchema);

// Export the Profession model
module.exports = Professions;
