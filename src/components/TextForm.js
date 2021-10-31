import React from "react";
import { useState } from "react";

export default function TexthtmlForm(props) {

    const [text, settext] = useState("");

    const handleOnChange=(e)=>{
        settext(e.target.value);
        // console.log("onclick fired", text);
    }

    const onUpperCase=()=>{
        settext(text.toUpperCase());
        props.showAlert("Success: ", "Converted to UpperCase ")
    }

    const onLowerCase=()=>{
        settext(text.toLowerCase());
        props.showAlert("Success: ", "Converted to LowerCase ")
        
    }

    const onExtraSpace=()=>{
        settext(text.replace(/  +/g, ' '))
        props.showAlert("Success: ", "Removed extra spaces ")

    }

    const onClearText=()=>{
        settext("");
        props.showAlert("Success: ", "Text cleared")

    }

  return (
    <> 
        <div className="form-group container text-center" >
            <h1 className="my-4 " >{props.heading}</h1>

            <textarea className="form-control my-5" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}} 
            id="exampleFormControl" rows="6" ></textarea>
            <button type="button" className="btn btn-primary mt-4 mx-2 " onClick={onUpperCase} >Convert Text to Uppercase</button>
            <button type="button" className="btn btn-primary mt-4 mx-2" onClick={onLowerCase} >Convert Text to LowerCase</button>
            <button type="button" className="btn btn-primary mt-4 mx-2" onClick={onExtraSpace} >Remove extra space</button>
            <button type="button" className="btn btn-primary mt-4 mx-2" onClick={onClearText} >Clear Text</button>

        </div>
        
        <div className="container my-5 text-center">
            <h2 >Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>

            <h2 >Preview your text</h2>
            
            <p>{text===""?"Enter text to preview":text}</p>
        </div>


    </>
  );

}
