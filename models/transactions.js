const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    required:  [true,"category should be required field"],
  },
  amount: {
    type: Number,
    required:  [true,"amount should be required field"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
