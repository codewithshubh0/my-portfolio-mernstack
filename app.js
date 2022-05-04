const express = require("express");
const app =express();
const {Register,signup,validate} =require("./backend");
const port = process.env.PORT || 7000;
const path =require("path");
const cors =require("cors");

const Joi =require("joi");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
require("dotenv").config();


app.post('/stored',async (req,res)=>{
    const {Username,Email,Message} =req.body;
    try
    {
      const newregister = new Register({Username,Email,Message}); 
      const data=   await newregister.save();
      res.status(200).send({message:"successfully registered"});
      console.log(data);
    }
    catch(error)
    {
     console.log(error);
    }

    console.log(req.body);
})
app.get('/stored',(req,res)=>{
  Register.find({},(error,result)=>{
    if(error){
      res.send(error);
    }else{
      res.send(result);
    }
})
})
app.post('/logindata',async(req,res)=>{
//   const {email,password} =req.body;
//   signup.findOne({email,password},(err,signUser)=>{
//     if(signUser){
//       if(password===signUser.password){
//         res.send({message:"successfully logged in",signUser:signUser});
//       }
//     }else{
//       res.send({message:"incorrect email or password"})
//     }
// })
const { error } = Validate(req.body);
  if (error)
    return res.status(400).send({ message: error.details[0].message });

  const User = await signup.findOne({ email: req.body.email });
  if (!User)
    return res.status(401).send({ message: "Invalid Email or Password" });

  // const validPassword = await bcrypt.compare(
  //   req.body.password,
  //   User.password
  // );
  if (req.body.password!==User.password)
    return res.status(401).send({ message: "Invalid Email or Password" });

  
  res.status(200).send({ message: "logged in successfully",user:User });
      
// } catch (error) {
// 	res.status(500).send({ message: "Internal Server Error" });
// }
})


app.get('/logindata',(req,res)=>{
  signup.find({},(error,result)=>{
    if(error){
      res.send(error);
    }else{
      res.send(result);
    }
})
const {email,password} =req.body;

})
app.post('/Userdata',async (req,res)=>{
  // const {name,email,password} =req.body;
  // signup.findOne({email:email},(err,User)=>{
  //   if(User){
  //     res.send({message:"User already registered"});
  //  }else{
  //     const signUser = new signup({name,email,password}); 
  //     const data =  signUser.save(err=>{
  //       if(err){
  //          res.send(err);
  //       }else{
  //          res.send({message:"successfully registered"})
  //          console.log(data);
  //       }
      
  //     });
  //     // res.status(200).send({message:"successfully registered"});
     
  //   }
  // })
  // try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const User = await signup.findOne({ email: req.body.email });
		if (User)
			return res
				.status(409)
				.send({ message: "Email already Exist !!!" });

	

		await new signup({ ...req.body, password: req.body.password }).save();
		res.status(201).send({ message: "User created successfully" });
  // }
	// } catch (error) {
	// 	res.status(500).send({ message: "Internal Server Error" });
	// }
})
// app.get('/Userdata',(req,res)=>{
//   const {name,email,password} =req.body;
//   signup.find({},(error,result)=>{
//     if(result){
//       res.send(result);
//     }else{
//       res.send(error);
//     }
// })
// })        

// app.post("/login", async (req, res) => {

//   const { error } = Validate(req.body);
//   if (error)
//     return res.status(400).send({ message: error.details[0].message });

//   const User = await signup.findOne({ email: req.body.email });
//   if (!User)
//     return res.status(401).send({ message: "Invalid Email or Password" });

//   const validPassword = await bcrypt.compare(
//     req.body.password,
//     User.password
//   );
//   if (!validPassword)
//     return res.status(401).send({ message: "Invalid Email or Password" });

//   const token = User.generateAuthToken();
//   res.status(200).send({ data: token, message: "logged in successfully" });
      
// // } catch (error) {
// // 	res.status(500).send({ message: "Internal Server Error" });
// // }
// });
const Validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

if(process.env.NODE_ENV ==="production"){
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}


app.listen(port,()=>{console.log("success from express")});