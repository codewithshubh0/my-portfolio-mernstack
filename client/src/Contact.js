import { useState } from 'react';
import getintouch from './images/getintouch-01.png';
import getintouchdark from './images/darkgetintouch-01.png';
import axios from 'axios';
import validator from 'validator';



const Contact =({mode,onClick})=>{

	const [user,setuser]=useState({Username:"",Email:"",Message:""});
    const [warn,setwarn] =useState(false);
    const [warntext,setwarntext] =useState("");
    const [greettext,setgreettext] =useState("");
    const [greet,setgreet] =useState(false);
    

	const handleinput =(e)=>{
    const {name ,value}=e.target;
    	setuser({...user,[name]:value})
        setwarntext("")
        setwarn(false);
        setgreet(false);
        setgreettext("")
        console.log(e.target.name);
	}
    
	const senddata = async (e)=>{
         e.preventDefault();
	 
	     const {Username,Email,Message}=user;
       
        

	// 	 if(Username && Email && Message){
    //         if(validator.isEmail(Email)){
    //             axios.post('/stored',user).then(function (response) {
    //                 setgreet(!greet);
    //                 setgreettext("Successfully sent !!!")
                 
    //                 if(response.ok){
    //                     return response.json()
    //                 }
    //               }) 
    //               setuser({Username:"",Email:"",Message:""})
    //         }else{
    //             setwarn(true);
    //          setwarntext("Email is not valid !!!");
    //         }
			 
			
             
	// 	 }else{
    //          setwarn(true);
    //          setwarntext("Please fill all fields !!!");
    //    }
      if(Username && Email && Message){
            if(validator.isEmail(Email)){
                axios.post('/stored',user).then(function (response) {
                    setgreet(!greet);
                    setgreettext("Successfully sent !!!")
                 
                    if(response.ok){
                        return response.json()
                    }
                  }) 
                  setuser({Username:"",Email:"",Message:""})
            }else{
                setwarn(true);
             setwarntext("Email is not valid !!!");
            }
			 
			
             
		 }else{
             setwarn(true);
             setwarntext("Please fill all fields !!!");
       }
      
	}
    return (
        <>
        
        <div id="footer" className={mode?"container-fluid footdark":"container-fluid foot"}>
	<div className="row text-center justify-content-center contact">
		<div className={mode?"col-md centerdark":"col-md center"}><a>Contacts</a></div>
    </div>
   <div className="text-center">
    <i className="fa fa-minus below" aria-hidden="true"></i>
    <i className="fa fa-minus below" aria-hidden="true"></i>
    </div>

	<div className="row dis">
        <div className="col-md-6 text-center displaybox">
          <div className="commentlefttext">
            <img src={mode?getintouchdark:getintouch}></img>
          </div>
            
        </div>
        <div className="col-md-6 mx-auto displaybox2">
            <form  >
                    <div className="mb-3">
                        <label  className={mode?"form-label text-light":"form-label text-dark"}>Name *</label><br></br>
                        <input type="text" name="Username" className="text-line" value={user.Username} onChange={handleinput} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div><br></br><br></br>
                    <div className="mb-3">
                        <label className={mode?"form-label text-light":"form-label text-dark"}>Email *</label><br></br>
                        <input type="email" name="Email" className="text-line" value={user.Email} onChange={handleinput} id="exampleInputPassword1" required/>
                    </div><br></br><br></br>
                    <label className={mode?"form-label text-light":"form-label text-dark"}>Message *</label><br></br>
                    <textarea className="text-line" type="text" value={user.Message} onChange={handleinput} name="Message" required ></textarea><br></br>
                    {warn?<div className='text-center warning'><i className="fas fa-exclamation-circle"></i> {warntext}</div>:greet?<div className='text-center success'><i className="fas fa-check-circle"></i> {greettext}</div>:null}
                    <input type="submit" value="Send" onClick={senddata} className={mode?"sendbtndark":"sendbtn"} ></input>
             </form><br></br>
            
           
        </div>
    </div>
	<div className="row justify-content-center text-center footer">
		<div className="col-md-2">
			<a className={mode?"contdark":"cont"} href="https://www.facebook.com/profile.php?id=100006019685650" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
		</div>
		<div className="col-md-2"><a className={mode?"contdark":"cont"} href="https://www.instagram.com/______404_not_found_/" target="_blank"> <i className="fa fa-instagram" aria-hidden="true"></i></a></div>
		<div className="col-md-2"><a className={mode?"contdark":"cont"} href="https://www.behance.net/anjanisharma1" target="_blank"><i className="fa fa-behance" aria-hidden="true"></i></a></div>
		<div className="col-md-2"><a className={mode?"contdark":"cont"} href="https://www.linkedin.com/in/anjani-sharma-5b63371ba/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></div>
		<div className="col-md-2"><a className={mode?"contdark":"cont"} href="https://wa.me/qr/MNVE4TFGK2F2J1" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></div>
		<div className="col-md-2"><a className={mode?"contdark":"cont"} href="https://github.com/codewithshubh0" target="_blank"><i className="fab fa-github"></i>
</a></div>
	</div>
</div>
        </>
    )
}

export default Contact;