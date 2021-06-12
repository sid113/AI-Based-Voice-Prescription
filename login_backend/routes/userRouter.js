const router = require("express").Router();
const User=require("../models/userModel");
const bycrpt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const auth=require("../middleware/auth");
router.post("/register", async function (req, res) {
    try{
        let { email, password, passwordcheck, displayname } = req.body;
        console.log(email)
        console.log(password)
        console.log(passwordcheck)
        if (!email || !password || !passwordcheck) {
            return res.status(400).json({ msg: "Not all fields have been entered" });
        }
        if (password.length < 8) {
            return res.status(400).json({ msg: "password has to be 8 characters long" });
        }
        if(password!=passwordcheck){
            return res.status(400).json({ msg: "password is not match to the confirm password" });
        }
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({ msg: "An account with this email already exists" });
        }
        if(!displayname){
            displayname=email;
        }
        const salt=await bycrpt.genSalt();
        const passwordhash=await bycrpt.hash(password,salt);
        const newUser=new User({email,password:passwordhash,displayname});
        const savedUser=await newUser.save();
        res.json(savedUser);
        
    }catch(error){
        res.status(500).json({error: error.message});
    }


});

router.post("/login",async function(req,res){
    const {email,password}=req.body;
    console.log("hello");
    
    if(!email || !password){
        return res.status(400).json({ msg: "Not all fields have been entered" });
    }
    const user=await User.findOne({email:email});
    if(!user){
        return res.status(400).json({ msg: "No account with this email has been registered" });
    }
    const isMatch=await bycrpt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({ msg: "Invalid credentials." });
    }
    const token=jwt.sign({id:user._id},process.env.SECRET);
    res.json({token,user:{id:user._id,displayname:user.displayname}});
});

router.delete("/delete",auth,async function (req,res){
    try{
        const deletedUser=await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    }catch(err){
        return res.status(500).json({msg:err.message});
    
    }
    console.log(req.user);
});

router.post("/tokenIsValid",async function(req,res){
    try{
        const token=req.header("x-auth-token");
        if(!token){
           return res.json("false");
        }
        const verified=jwt.verify(token,process.env.SECRET);
        if(!verified){
           return res.json("false");
        }
        const user=await User.findById(verified.id);
        if(!user){
           return res.json("false");
        }
        return res.json("true");
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
});

router.get("/",auth,async(req,res)=>{   
    const user=await User.findById(req.user);
    res.json({
        displayname:user.displayname,
        id:user._id,
      
        
    });
});


router.get("/profile",auth,async(req,res)=>{
    const user=await User.findById(req.user);
    res.json({
        displayname:user.displayname,
        id:user._id,
        email:user.email
        
    });
});
// router.get("/profile",auth,async(req,res)=>{
//     const user=await User.findById(req.user);
//     res.json({
//         displayname:user.displayname,
//         id:user._id,
//         email:user.email,
//         password:user.password
//     });
// });
module.exports = router;