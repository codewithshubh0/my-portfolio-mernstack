import { Link } from "react-router-dom";
const Seclink=({mode})=>{
	
    return (
        
               <>
               <div className="secondmenu">
			                <li ><Link to="/home" className={mode?"nav-link col2":"nav-link col1"}>Home</Link></li>
							<li   ><Link to="/about" className={mode?"nav-link col2":"nav-link col1"} >About me</Link></li>
							<li  ><Link to="/works" className={mode?"nav-link col2":"nav-link col1"}>Works</Link></li>
							<li  ><Link to="/contact" className={mode?"nav-link col2":"nav-link col1"}>Contacts</Link></li>
							<li  ><Link to="/gallery" className={mode?"nav-link col2":"nav-link col1"}><span className="g">G</span>allery</Link></li>
							<li ><div className={mode?" nav-link col2user":"nav-link col1user"}>
															
														
															<div className="btn-group ">
															<i type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropleft fas fa-user-circle signin dropdown-toggle"></i>
																<div className="dropdown-menu boxuser" aria-labelledby="dropdownMenuButton">
																
																<Link to="/login" className="register" >Login</Link><br></br><br></br>
																<Link to="/signup" className="register" >Sign Up</Link>
															</div>
																</div>
														
															</div>
							</li>

				</div>			
	           </>
    )
}
export default Seclink;