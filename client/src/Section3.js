const Section3 =({mode})=>{
    return (
        <>
        <div id={mode?"skillbgdark":"skillbg"}>
     <div className="container-fluid my-5  text-center">

     	<div className="row justify-content-center" >
               <div className={mode?"skilldark":"skill"}><a>My Skills</a></div>  
     	</div>
              <div className="row  justify-content-center ski">
              	   <div className="col-md-3 ">
              	   	   HTML
              	   	   <div className={mode?"outerdark":"outer"}>
              	   	   	<div className={mode?"inner1 incoldark":"inner1 incol"}></div>
              	   	   </div>
              	   </div>
              	    <div className="col-md-3">
              	   	   CSS
              	   	   <div className={mode?"outerdark":"outer"}>
							<div className={mode?"inner2 incoldark":"inner2 incol"}></div>
              	   	</div>
              	   	   	
              	   </div>
              </div>
               <div className="row justify-content-center ski">
              	   <div className="col-md-3">
              	   	   JAVASCRIPT
              	   	   <div className={mode?"outerdark":"outer"}>
              	   	   	<div className={mode?"inner3 incoldark":"inner3 incol"}></div>
              	   	   	</div>
              	   </div>
              	    <div className="col-md-3">
              	   	   REACT
              	   	   <div className={mode?"outerdark":"outer"}>
              	   	   	<div className={mode?"inner4 incoldark":"inner4 incol"}></div>
              	   	   	</div>
              	   </div>
              </div>
               <div className="row justify-content-center ski">
              	   <div className="col-md-3">
              	   	   BOOTSTRAP
              	   	   <div className={mode?"outerdark":"outer"}>
              	   	   	<div className={mode?"inner5 incoldark":"inner5 incol"}></div>
              	   	   	</div>
              	   </div>
              	    <div className="col-md-3">
              	   	   JAVA
              	   	   <div className={mode?"outerdark":"outer"}>
              	   	   	<div className={mode?"inner6 incoldark":"inner6 incol"}></div>
              	   	   	</div>
              	   </div>
              </div>
               <div className="row justify-content-center ski">
              	   <div className="col-md-3">
              	   	   ILLUSTRATOR
              	   	   <div className={mode?"outerdark":"outer"}>
              	   	   	<div className={mode?"inner7 incoldark":"inner7 incol"}></div>
              	   	   	</div>
              	   </div>
              	    <div className="col-md-3">
              	   	  SKETCH
              	   	   <div className={mode?"outerdark":"outer"}>
              	   	   	<div className={mode?"inner8 incoldark":"inner8 incol"}></div>
              	   	   	</div>
              	   </div>
              </div>
            

              	<i className={mode?"fa fa-minus belowdark":"fa fa-minus below"} aria-hidden="true"></i>
              	<i className={mode?" fa fa-minus belowdark":"fa fa-minus below"} aria-hidden="true"></i>
              
	</div>
</div>
        </>
    )
}

export default Section3;