import {useState,useEffect } from 'react'
import image from './Imgapi';

const Gallery =({mode})=>{ 
    const [expand,setexpand] =useState(false);
    const [item,setitem] =useState('all');
    const [filterdimage,setfilter] =useState([]);

// const filteritem =(type)=>{
//    const updatedItem =item.filter((currel)=>{
//      return currel.category===type;
//    })
//    setitem(updatedItem);
// }

useEffect(() => {
   item==='all' ?setfilter(image):setfilter(image.filter(img=>img.category===item))
}, [item])

    return(
        <>
    
      
         <div onClick={()=>{setexpand(!expand)}} className={mode?"viewgalldark":"viewgall"}><a>{expand?'Close Gallery':'View Gallery'}</a></div>
       
           {expand? <>
            
            <div className=" row gallerybg text-center">
           <div className="container-fluid ">
                <div className="d-flex justify-content-around but">
                    <button onClick={()=>setitem('illustration')}><i className="fas fa-filter fil"></i> ILLUSTRATION</button>
                    <button onClick={()=>setitem('pensketch')}><i className="fas fa-filter fil"></i> PENSKETCH</button>
                    <button onClick={()=>setitem('all')}><i className="fas fa-filter fil"></i> ALL</button>
                   
                </div>
            </div> 
             {filterdimage.map((el)=>{

                 const {url,id}=el;
                 return <><div className=" col-lg-3 col-md-6 gallerydiv" >
                     <img className="galleryanim" src={url} key={id} alt="" />
                 </div></>
                
           })}
           </div></>:null
           }
           

        </>
    )
}

export default Gallery;