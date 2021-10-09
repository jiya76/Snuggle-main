const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/klib');
const dotenv= require('dotenv');
var conn= mongoose.Collection;
var userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
         
    username:
    {
        type: String,
        required: true,
        index:{
            unique:true,
        }
    },
    email:
    {
        type: String,
        required: true,
        index:{
            unique:true,
        }
    },
    password:
    {
        type: String,
        required:true,

    }
   

});
var userModel= mongoose.model('users',userSchema);
module.exports= userModel;