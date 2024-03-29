const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  // ... other fields
});

module.exports = mongoose.model('Recipe', recipeSchema)
