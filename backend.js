const mongoose = require("mongoose");
require("dotenv").config();
var validator = require('validator');
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/signupuser').then(()=>{console.log("success")});

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true }).then(()=>{console.log("success from database")});
const MySchema =new mongoose.Schema({
  Username:{
    type:String
  },  
  Email: {
        type:String,
         validate(value){
           if(!validator.isEmail(value)){
             throw new Error("EMAIL IS NOT VALID");
           }
         }
      },
    Message:{
        type:String,
    }
})
const signupSchema =new mongoose.Schema({
  name:{
    type:String
  },  
  email: {
        type:String,
         validate(value){
           if(!validator.isEmail(value)){
             throw new Error("EMAIL IS NOT VALID");
           }
         }
      },
    password:{
        type:String,
    }
})
// signupSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "7d",
// 	});
// 	return token;
// };

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};
const Register =new mongoose.model("comments",MySchema);
const signup =new mongoose.model("userdetails",signupSchema);


module.exports={Register,signup,validate};
// mongodb+srv://usersignup:Kanke@123@cluster0.lasri.mongodb.net/usersignup?retryWrites=true&w=majority
// mongo "mongodb+srv://usersignup:Kanke@123@cluster0.lasri.mongodb.net/usersignup"