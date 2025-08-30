import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = () =>{
        console.log("Upper case conversion clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () =>{
        console.log("lower case conversion clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("new Text");
  return (
    <>
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      <button className="btn btn-primary my-3" onClick={handleUpperClick}>convert to uppercase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleLowerClick}>convert to lowercase</button>

    </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
