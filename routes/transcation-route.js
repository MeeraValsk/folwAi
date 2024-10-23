const express = require('express');
const transcationRouter = express.Router();

const mongoose=require('mongoose')
const Transaction = require('../models/transactions');
const{authenticateToken}=require('../middlewares/authentication');
// POST /transactions - Add a new transaction
transcationRouter.post('/',authenticateToken, async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json({data:transaction,
        statusCode:201,
        message:"transaction created sucessfully"}

    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all transactions
transcationRouter.get('/', authenticateToken, async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;


    //here fetching all transcations of particular user
  console.log(req.userId)
      const totalTransactions = await Transaction.countDocuments({ userId: req.userId });

     if(skip>=totalTransactions ){
        throw new Error("Page Not Found")
     }
     //fetching transcations for specfic user and populating wity category
      const transactions = await Transaction.find({ userId: req.userId })
        .skip(skip)
        .limit(limit)
        .populate('categoryId','userId');
  
    
  
      res.status(200).json({
        statusCode:200,
        data:transactions,
        count:totalTransactions,
        message:"transaction data fetched successfully"
       
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

//  Get  transaction by ID
transcationRouter.get('/:id',authenticateToken, async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate('category');
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json({data:transaction,
        statusCode:200,
        message:"transaction Details fetcehed sucessfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Update a transaction by ID
transcationRouter.put('/:id',authenticateToken, async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json({data:transaction,
        statusCode:200,
        message:"transaction updated sucessfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete a transaction by ID
transcationRouter.delete('/:id',authenticateToken, async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json({data:transaction,
        statusCode:200,
        message:"transaction Deleted sucessfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





//get monthly-reports


// Ensure your authentication middleware is included

transcationRouter.get('/reports/monthly', authenticateToken, async (req, res) => {
  const { month, year } = req.query; // monthly?month=10&year=2024

  // Validate month and year
  if (!month || !year || isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    return res.status(400).json({ error: 'Invalid month or year' });
  }

  const startDate = new Date(year, month - 1, 1); // Start of the month
  const endDate = new Date(year, month, 0); // Last day of the month

  try {
    const report = await Transaction.aggregate([
      { 
        $match: {
          userId: mongoose.Types.ObjectId(req.userId), // Ensure we filter by user ID
          date: { $gte: startDate, $lte: endDate }
        }
      },
      {
        $group: {
          _id: '$category',
          totalAmount: { $sum: '$amount' },
          type: { $first: '$type' }
        }
      },
      {
        $lookup: {
          from: 'categories', // Ensure this matches your actual categories collection name
          localField: '_id',
          foreignField: '_id',
          as: 'categoryDetails'
        }
      },
      {
        $unwind: '$categoryDetails'
      }
    ]);

    res.status(200).json({
      statusCode: 200,
      message: "Monthly report retrieved successfully",
      data: report
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = transcationRouter;

  


