const express = require('express');
const categoryRouter = express.Router();
const Category = require('../models/category');
const{authenticateToken}=require('../middlewares/authentication');

//  Add a new category
categoryRouter.post('/',authenticateToken, async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET  all categories
categoryRouter.get('/', authenticateToken,async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = categoryRouter;
