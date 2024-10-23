const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"category name should be required field"]
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required:  [true,"category type should be required field"],
  },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
