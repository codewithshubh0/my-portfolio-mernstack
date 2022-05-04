import React, { useState,useEffect } from "react";
import "./mainCSS.css";
import { Link, Navigate } from "react-router-dom";
import Seclink from "./Seclink";
import img from './images/LOGO-01-01.png'
import img1 from './images/Logodark.png'


const Header=({mode})=>{
	const [show,setshow] =useState(false);
 
const reload =()=>{
	Navigate("/home")
	window.location.reload();

}


	return(
            <>
     <div className={mode?"container-fluid headerdark":"container-fluid header"}>
		        <div className="container nav">
						<img className="logo" src={mode?img1:img} alt=""/>
						
						{show?<i onClick={()=>{setshow(!show)}} className="fas fa-times hamburger"></i>:<i onClick={()=>{setshow(!show)}} className="fas fa-align-right hamburger"></i>}
					
						<ul >

				            <li  ><Link to="/home" onClick={reload} className={mode?"nav-link col2":"nav-link col1"}>Home</Link></li>
							<li   ><Link to="/about" className={mode?"nav-link col2":"nav-link col1"} >About me</Link></li>
							<li  ><Link to="/works" className={mode?"nav-link col2":"nav-link col1"}>Works</Link></li>
							<li  ><Link to="/contact" className={mode?"nav-link col2":"nav-link col1"}>Contacts</Link></li>
							<li  ><Link to="/gallery" className={mode?"nav-link col2":"nav-link col1"}><span className="g">G</span>allery</Link></li>
							<li  ><div className={mode?" nav-link col2user":"nav-link col1user"}>
															
														
															<div className="btn-group ">
															<i type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropleft fas fa-user-circle signin dropdown-toggle"></i>
																<div className="dropdown-menu boxuser" aria-labelledby="dropdownMenuButton">
																
																<Link to="/login" className="register" >Login</Link><br></br><br></br>
																<Link to="/signup" className="register" >Sign Up</Link>
															</div>
																</div>
														
															</div>
							</li>
	             </ul>
						
							
				 </div>
				{ show ?<Seclink />:null}
	</div>
</>
        )
    
}
export default Header;