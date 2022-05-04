import React,{useState}from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup =({mode})=>{
  let navigate =  useNavigate();
const [user,setuser]=useState({name:"",email:"",password:""})	
const [error, setError] = useState("");

const handledata =(e)=>{
  e.preventDefault();
  const {name,value} =e.target;
  setuser({...user,[name]:value});
  setError("")
}
console.log(user);
 const signupdata = async(e)=>{
    // const {name,email,password,cpassword}=user;
    // if(name && email && password && password===cpassword){
    //    axios.post("/userdata",user).then(res=>{alert(res.data.message)
    //   navigate("/login")})

    // }else{
    //     alert("invalid")
    // }
    
  //  navigate("/login")
  e.preventDefault();
		try {
			const { user: res } = await axios.post("/userdata", user);
			navigate("/login");
      window.location.reload();
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}

 }


return (
    <>
<h3 className={mode?"text-center usertitledark":"text-center usertitle"}>SIGN UP</h3>
      <div className="container signbox">
      
      <form onSubmit={signupdata}>
      <div className={mode?"form-group text-light":"form-group text-dark"}>
            <label >Name *</label><br></br>
            <input type="text" className={mode?"text-line-signdark":"text-line-sign"} onChange={handledata}  name="name" value={user.name} required/>
           
          </div><br></br><br></br>
         <div className={mode?"form-group text-light":"form-group text-dark"}>
            <label >Email *</label><br></br>
            <input type="email" className={mode?"text-line-signdark":"text-line-sign"} onChange={handledata} name="email" value={user.email} required/>
           
          </div><br></br><br></br>
          <div className={mode?"form-group text-light":"form-group text-dark"}>
            <label >Password *</label><br></br>
            <input type="password" className={mode?"text-line-signdark":"text-line-sign"} onChange={handledata} name="password" value={user.password} required/>
          </div><br></br><br></br>
          {/* <div className={mode?"form-group text-light":"form-group text-dark"}>
              <label >Confirm Password *</label><br></br>
              <input type="password" className={mode?"text-line-signdark":"text-line-sign"} onChange={handledata} value={user.cpassword} name="cpassword" required/>
            </div><br></br><br></br> */}
            {error && <div className="text-center autherrormsg">{error}</div>}<br></br><br></br>
          <button type="submit" className={mode?"btn btn-light":"btn btn-dark"}>Sign up</button><br></br><br></br>
          <h6 className={mode?"text-light":"text-dark"}>Already have an account? <Link to="/login">Login</Link></h6>
        </form>
              
      </div>
  
    </>
)}
 

export default Signup;