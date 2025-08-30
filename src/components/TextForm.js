import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = () =>{
        console.log("Upper case conversion clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");
    // setText("new Text");
  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      <button className="btn btn-primary my-3" onClick={handleUpperClick}>convert to uppercase</button>
    </div>
  );
}
