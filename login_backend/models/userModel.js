const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:8},
    displayname:{type:String},

});


module.exports=User=mongoose.model("user",userSchema);