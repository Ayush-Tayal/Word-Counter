import React from "react";
import { useState } from "react";

export default function TexthtmlForm(props) {
    console.log("Inside Home", props)
    const [text, setText] = useState("");

    const handleOnChange=(e)=>{
        setText(e.target.value);
        // console.log("onclick fired", text);
    }

    const onUpperCase=()=>{
        setText(text.toUpperCase());
        props.showAlert("Success: ", "Converted to UpperCase ")
    }

    const onLowerCase=()=>{
        setText(text.toLowerCase());
        props.showAlert("Success: ", "Converted to LowerCase ")
        
    }

    const onExtraSpace=()=>{
        setText(text.replace(/  +/g, ' '))
        props.showAlert("Success: ", "Removed extra spaces ")

    }

    const onCopyText=()=>{
        let text = document.getElementById("exampleFormControl");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Success: ", "Text Copied")

    }
    const onClearText=()=>{
        setText("");
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
            <button type="button" className="btn btn-primary mt-4 mx-2" onClick={onCopyText} >Copy Text</button>
            <button type="button" className="btn btn-primary mt-4 mx-2" onClick={onClearText} >Clear Text</button>

        </div>
        
        <div className="container my-5 text-center">
            <h2 >Your text summary</h2>
            <p><b>{text.length===0?"0":text.trim().replace(/  +/g, " ").split(" ").length} </b> words and <b>{text.length}</b> characters</p>

            <p>{text.split(" ").length / 200} min read </p>
            <h2 >Preview your text</h2>
            
            <p>{text===""?"Enter text to preview":text}</p>
        </div>


    </>
  );

}
