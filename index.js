const express=require("express");
const app=express();
const dotenv=require("dotenv");
const morgan=require("morgan");//it is used to log the request details
const transcationRouter = require("./routes/transcation-route");
const categoryRouter = require("./routes/category-route");
const userRouter = require("./routes/user-route");
dotenv.config({});//so all environmental varibles in config.env will stotre in node js environmental variables
const initializeConnection=require('./dbConnnection/db-con');
const summaryRouter = require("./routes/summary");

initializeConnection();
app.use(morgan("dev"));//it is used to log the request details
app.use(express.json());

app.use('/api/v1/categories',categoryRouter)
app.use('/api/v1/transactions',transcationRouter)
app.use('/api/v1/users',userRouter);
app.use('/api/v1/summary',summaryRouter)

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Server starts Running at http://localhost:3000/")
});