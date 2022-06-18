
import './App.css';
import Navbar from './componants/Navbar.jsx';
import Textform from './componants/Textform.jsx';

import Alert from './componants/Alert'
import React,{ useState } from 'react';
import About from './componants/About.jsx';

import { Route, Routes,Link} from "react-router-dom";




function App() {
  const [mode ,setmode]=useState("light");
  const [color ,setcolor]=useState("dark");
  const [alert ,setalert]=useState("null")
  const showAlert=(type,msg)=>{
    setalert({
      type:type,
      msg:msg
    }
    )
    

  }
  const togmode=()=>{
    if(mode==="light"){
      setmode("dark");
      setcolor("white")
      showAlert("Sucess","Dark Mode is Enable")
    }else{
      setmode("light");
      setcolor("Dark")
      showAlert("Sucess","Light Mode is Enable")
    }
  }
  return (
    <><div className={`container-fluid bg-${mode} text-${color}`}>
    <Navbar  title="Nikhil" mode={mode} togmode={togmode} color={color}/>
  
    <Alert  alert={alert} />
    <Routes>
        <Route exact path="/" element={<Textform head="Enter text" showAlert={showAlert}mode={mode} color={color}/>} />
        <Route exact path="/about" element={<About />} />
        
    </Routes>
    
    
    
    </div>
    
    </>
);

}


export default App;
