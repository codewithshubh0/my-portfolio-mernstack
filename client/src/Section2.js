


const Section2=({mode})=>{
	return(
        <>
        <div id="1st"></div>
	<div className="container aboutme">

		<div className="row justify-content-center aboutbox" >
		
            <div  className="col-md-4 about text-right">
				<a>ABOUT ME</a>
	           </div>
             
	          
	         
	            <div  className="col-md-6 py-md-1 hii"><a>Hi, This is Anjani Sharma. I am a <strong className={mode?"highdark":"highlight"}>professional Graphic designer</strong> and <strong className={mode?"highdark":"highlight"}>Front-end developer</strong>.
 I started out as an artists and then learned Graphic designing  and animation and Front-end developer. Currently an Engineering student I wish to pursue this passion of mine to develop and create things.
			</a></div>
           
			</div>
			
		</div>
	
        </>
    )
}

export default Section2;