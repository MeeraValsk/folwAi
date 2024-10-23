const express = require('express');
const summaryRouter = express.Router();
const Transaction = require('../models/transactions');

//  Retrieve total income, expenses, and balance
summaryRouter.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.aggregate([
      {
        $group: {
          _id: '$type',
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);

    const income = transactions.find(t => t._id === 'income')?.totalAmount || 0;
    const expenses = transactions.find(t => t._id === 'expense')?.totalAmount || 0;
    const balance = income - expenses;

    res.status(200).json({data:{ income, expenses, balance },message:"Retrieve total income and expenses and balance"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports =summaryRouter;
