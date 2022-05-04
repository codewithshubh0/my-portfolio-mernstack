import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import ScrollToTop from "react-scroll-to-top";
import ScrollReveal from 'scrollreveal';
import Section3 from './Section3';
import Gallery from './Gallery';
import Section5 from './Section5';
import Contact from './Contact';
import Footer from './Footer';
import Cursor from './Cursor';
import Projects from './Projects';
import { Route,Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { JsonWebTokenError } from 'jsonwebtoken';
import Headerlogout from './Headerlogout';
import HashLoader from "react-spinners/HashLoader";
const getmode =()=>{
  let data=JSON.parse(localStorage.getItem("mode"))
 if(data){
   return data;
 }else{
  return  false
 }
 
}
const getuserdata =()=>{
  let data=JSON.parse(localStorage.getItem("showpageonlogin"))
 if(data){
   return data;
 }else{
  return  []
 }
 
}


function App() {
  const[mode, setmode]=useState(getmode())
  
  const [showpageonlogin,setshowpageonlogin] =useState(getuserdata()); 
  let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#000000");

  if(mode==false){
    document.body.style.backgroundColor = "#e4fffe"
    
  }else{
    document.body.style.backgroundColor = "#272727"
    
  }
  useEffect(() => {
  
     const reve =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"300px",
      reset:true,
      
    });
    reve.reveal(".banner-title")
 
    const rev1 =ScrollReveal({
      origin:"left",
      duration:1000,
      distance:"200px",
      reset:true,
      
          });
    rev1.reveal(".about,.inner3,.inner5,.one,.three,#first,#third,#fifth,#seventh,#nineth,#weatherlink")

    const revv =ScrollReveal({
      origin:"left",
      duration:2000,
      distance:"200px",
      reset:true,
      
          });
    revv.reveal(".displaybox")
    const rev2 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"50px",
     reset:false
      
          });
    rev2.reveal(".logo,ul,.hamburger")


    const rev3 =ScrollReveal({
      origin:"right",
      duration:2000,
      distance:"200px",
      reset:true,
      
          });
    rev3.reveal(".hii,.inner4,.inner6,.two,.four,#second,#fourth,#sixth,#eightth,#tenth,#weather,.displaybox2")

    const rev4 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"20px",
      reset:true,
      
          });
    rev4.reveal(".upperbar")
   


    const rev5 =ScrollReveal({
      origin:"bottom",
      duration:1000,
      distance:"200px",
      reset:true,
      
          });
    rev5.reveal(".inner7,.inner8,.below")
   
   
    const rev6 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"200px",
      reset:true,
      
          });
    rev6.reveal(".inner1,.inner2")
    const rev7 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"100px",
      reset:true,
      
          });
    rev7.reveal(".viewgall")
  
  
  }, [])


  
  useEffect(() => {
   localStorage.setItem("mode",JSON.stringify(mode));
   localStorage.setItem("showpageonlogin",JSON.stringify(showpageonlogin))

  }, [mode,showpageonlogin])
  

  // for loading
  

  // if(showpageonlogin){
  //   setverify(true);
  // }
  
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000)
}, [])
  
 return (
   <>
    <Routes>
    <Route path="/"  element={ showpageonlogin && showpageonlogin._id ? <>
            <ScrollToTop />
            <Headerlogout nameuser={showpageonlogin.name} setshowpageonlogin={setshowpageonlogin}  mode ={mode}/>
            <Cursor className="cur"/>
            <Section1 onClick={()=>setmode(!mode)} mode={mode}/>
            <Section2 mode ={mode}/>
            <Section3 mode ={mode}/>
            <Projects mode ={mode}/>
            <Section5 mode ={mode}/>
            
            <Contact onClick={()=>setmode(!mode)} mode ={mode} />
            <Gallery mode ={mode}/>
            <Footer mode ={mode}/>
      </> : <>{loading?<><div className="loader"><HashLoader color={mode?"#11cac4":"#014745"}  loading={loading} size={80} /></div> </>:<><Cursor className="cur"/><Header mode ={mode}/><Login  setshowpageonlogin={setshowpageonlogin} mode ={mode}/><ScrollToTop /></>}</>}/>
      
    
     
      <Route path="/home"  element={ showpageonlogin && showpageonlogin._id ? <>
            <ScrollToTop />
            <Headerlogout  nameuser={showpageonlogin.name} setshowpageonlogin={setshowpageonlogin}  mode ={mode}/>
            <Cursor className="cur"/>
            <Section1 onClick={()=>setmode(!mode)} mode={mode}/>
            <Section2 mode ={mode}/>
            <Section3 mode ={mode}/>
            <Projects mode ={mode}/>
            <Section5 mode ={mode}/>
          
            <Contact onClick={()=>setmode(!mode)} mode ={mode} />
            <Gallery mode ={mode}/>
            <Footer mode ={mode}/>
      </> : <><Cursor className="cur"/><Header  mode ={mode}/><Login  setshowpageonlogin={setshowpageonlogin} mode ={mode}/><ScrollToTop /></>  }/>
      <Route path="/about" element={showpageonlogin && showpageonlogin._id?<><Cursor className="cur"/><Headerlogout nameuser={showpageonlogin.name} setshowpageonlogin={setshowpageonlogin}  mode ={mode}/><Section2 mode ={mode}/><ScrollToTop /><Footer mode ={mode}/></>:<><Cursor className="cur"/><Header  mode ={mode}/><Login  setshowpageonlogin={setshowpageonlogin} mode ={mode}/><ScrollToTop /></> }/>
      <Route path="/works" element={showpageonlogin && showpageonlogin._id?<><Cursor className="cur"/><Headerlogout nameuser={showpageonlogin.name} setshowpageonlogin={setshowpageonlogin}  mode ={mode}/> <Projects mode ={mode}/><Section5 mode ={mode}/><ScrollToTop /><Footer mode ={mode}/></>:<><Cursor className="cur"/><Header mode ={mode}/><Login  setshowpageonlogin={setshowpageonlogin} mode ={mode}/><ScrollToTop /></>}/>
      <Route path="/contact" element={showpageonlogin && showpageonlogin._id?<><Cursor className="cur"/><Headerlogout nameuser={showpageonlogin.name} setshowpageonlogin={setshowpageonlogin}  mode ={mode}/><Contact mode ={mode}/><ScrollToTop /><Footer mode ={mode}/></>:<><Cursor className="cur"/><Header mode ={mode}/><Login  setshowpageonlogin={setshowpageonlogin} mode ={mode}/><ScrollToTop /></>}/>
      <Route path="/gallery" element={showpageonlogin && showpageonlogin._id?<><Cursor className="cur"/><Headerlogout nameuser={showpageonlogin.name} setshowpageonlogin={setshowpageonlogin}  mode ={mode}/><Gallery mode ={mode}/><ScrollToTop /></>:<><Cursor className="cur"/><Header mode ={mode}/><Login  setshowpageonlogin={setshowpageonlogin} mode ={mode}/><ScrollToTop /></>}/>
      <Route path="/login" element={<><Cursor className="cur"/><Header mode ={mode}/><Login setshowpageonlogin={setshowpageonlogin} mode ={mode}/><ScrollToTop /></>}/>
      <Route path="/signup" element={<><Cursor className="cur"/><Header mode ={mode}/><Signup mode ={mode}/><ScrollToTop /></>}/>
    </Routes>
  
   
   {/* <ScrollToTop />

   
   <Header mode ={mode}/>
   <Cursor className="cur"/>
    <Section1 onClick={()=>setmode(!mode)} mode={mode}/>
   <Section2 mode ={mode}/>
   <Section3 mode ={mode}/>
   <Projects mode ={mode}/>
   <Section5 mode ={mode}/>
   <Gallery mode ={mode}/>
   <Contact mode ={mode}/>
   <Footer mode ={mode}/>  */}
   
   </>
  );
}


export default App;
