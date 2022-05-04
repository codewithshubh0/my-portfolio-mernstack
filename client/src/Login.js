import React,{useState}from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

const Login =({mode,setshowpageonlogin,setnameuser})=>{

  const navigate =useNavigate();
const [loginuser,setloginuser] =useState({email:"",password:""});
const [error, setError] = useState("");
  const setdata =(e)=>{
    e.preventDefault();
    const {name,value} =e.target;
    setloginuser({...loginuser,[name]:value});
    setError("")
  }


 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  
     await axios.post("/logindata", loginuser).then(res=>{
      // alert(res.data.message)
      
        setshowpageonlogin(res.data.user)
        localStorage.setItem("token", res.data);
        navigate("/home");
        window.location.reload()
      // navigate("/home");
      // localStorage.setItem("token", res.data);
     
    });
    
    // alert(res.data.message)
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      setError(error.response.data.message);
    }
  }

};

return (
    <>
  		<h3 className={mode?"text-center usertitledark":"text-center usertitle"}>LOGIN TO VIEW</h3>
          <div className="container signbox">
         
      <form onSubmit={handleSubmit}>
         <div className={mode?"form-group text-light":"form-group text-dark"}>
            <label >Email *</label><br></br>
            <input type="email" className={mode?"text-line-signdark":"text-line-sign"} name="email" value={loginuser.email} onChange={setdata} />
           
          </div><br></br><br></br>
          <div className={mode?"form-group text-light":"form-group text-dark"}>
            <label >Password *</label><br></br>
            <input type="password" className={mode?"text-line-signdark":"text-line-sign"} value={loginuser.password} onChange={setdata}  name="password"/>
          </div><br></br><br></br>
          {error && <div className="text-center autherrormsg">{error}</div>}<br></br><br></br>
          <button type="submit"  className={mode?"btn btn-light":"btn btn-dark"}>Login</button><br></br><br></br>
          <h6 className={mode?"text-light":"text-dark"}>Dont't have an account ? <Link to="/signup">Sign up</Link></h6>
        </form>
              
      </div>
    </>
)}
 

export default Login;