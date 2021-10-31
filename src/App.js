import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1200)
  }


  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Success", ": Dark Mode has been enabled")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Success", ": Light Mode has been enabled")

    }
  }


  return (
    <>
      <Navbar title="WordConverter" mode={mode} toggleMode={toggleMode} />

      <Alerts alert={alert}/>

      <TextForm heading = "Enter your text below " mode={mode} showAlert={showAlert}/> 

      {/* <About/> */}

    </>
  );
}

export default App;
