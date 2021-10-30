import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }
  }


  return (
    <>
      <Navbar title="WordConverter" mode={mode} toggleMode={toggleMode}/>

      <TextForm heading = "Enter your text below " mode={mode}/> 

      {/* <About/> */}

    </>
  );
}

export default App;
