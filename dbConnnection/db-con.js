const mongoose=require("mongoose");

const initializationOfDb=async()=>{
  try{
    await mongoose.connect("mongodb+srv://meeravalisk89:17bq1a0389@cluster0.6gfzurw.mongodb.net/folwAiDb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connected Succeessfully")
  }catch(e){
    console.error("Error connecting to MongoDB: ", e);
  }
    
}

module.exports=initializationOfDb;
