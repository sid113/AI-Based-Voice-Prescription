const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
    try{
        const token=req.header("x-auth-token");
        if(!token){
            return res.status(401).json({msg:"No authetication token, autherization denied"});
        }
        var verified=jwt.verify(token,process.env.SECRET);
        if(!verified){
            return res.status(401).json({msg:"Token verification failed, autherization denied"});
        }
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
    req.user=verified.id;
    //console.log("hajshaj"+req.user);
    next();
}
module.exports=auth;