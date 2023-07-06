const mongoose = require('mongoose');

const modelUser = mongoose.Schema({
    nome:{type:String,required:true,minlength:4},
    sobrenome:{type:String,required:true,minlength:4},
    email:{type:String,required:true,unique:true},
    senha:{type:String,required:true,minlength:6},
    admin:{type:Boolean,default:false,required:true}
})


const User = mongoose.model("User",modelUser)
module.exports = User;
