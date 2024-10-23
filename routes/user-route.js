const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Register a new user
userRouter.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    //check user exist or not
    if (existingUser){
        return res.status(400).json({ message: 'User already exists' });
    } 

    //hashing password
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser = new User({ username, password :hashedPassword});
    await newUser.save();

    res.status(200).json({
        statusCode:200,
        message:"user registerd successfully",


    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//  Login a user
userRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    //check user exist or not
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'user doesnot exist' });
//comapring password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid  password' });
//generate token
    const token = jwt.sign({ id: user._id }, "MY_SECRTET_KEY_ON_SERVER_SIDE");
    res.json({ 
        message:"user loggedin successfully",
        token
     });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports=userRouter;