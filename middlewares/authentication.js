const jwt=require("jsonwebtoken");

//Authenticate Token Middleware this middle going to  validate whether user is authorized or not
exports.authenticateToken = (req, res, next) => {

    //1. Read the token check if exists or not 
    const authHeader =req.headers.authorization; 
    //  console.log(authHeader);
let token;//undefined
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1]
        
    }
  
 // console.log(token);
   if(!token){
   return  res.status(401).json({statusCode:401,message:"unauthorized" });
   }
   
   //2. validate token 
  jwt.verify(token,"MY_SECRTET_KEY_ON_SERVER_SIDE",async(error,payload)=>{
    if(error){
       return res.status(401).json({statusCode:401,message:error.message });
    }else{
     
      console.log(payload.id);
      //Accesss
      req.userId=payload.id
    next(); //call route handler or next middleware function here 
    }

   } );



   
}