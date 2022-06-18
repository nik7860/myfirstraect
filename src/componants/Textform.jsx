import React,{useState} from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Sucess","text in uppercase")

    }
    const handlelclick=()=>{
        //console.log("lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Sucess","text in lowercase")

    }
    const handlelclear=()=>{
      //console.log("lowercase was clicked"+text);
      let newText="";
      setText(newText);
      props.showAlert("Sucess","text is clear")

  }
  const handlecopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Sucess","text is copy")
  }
    const handleUpChange=(event)=>{
        //console.log("Uppercase was chgange");
        setText(event.target.value)
    }
    const[text,setText]=useState('Enter text here');
  return (
    <><div className='container'>
      <div className="mb-3 ">
        <label forhtml="exampleFormControlTextarea1" className="form-label">{props.head}</label>
        <textarea className={`form-control bg-${props.mode} text-${props.color}`} value={text} onChange={handleUpChange} id="mybox" rows="8"></textarea>

      </div>
      <button className='btn btn-primary mx-2' onClick={handleupclick}>Upper case </button>
      <button className='btn btn-primary mx-2' onClick={handlelclick}>Lower case</button>
      <button className='btn btn-primary mx-2' onClick={handlelclear}>Clear</button>
      <button className='btn btn-primary mx-2' onClick={handlecopy}>Copy</button>
    </div><div className='container'>
        <h1>Your text summary!</h1>
        <p>{text.split(" ").filter((element)=>{return element,length!==0}).length}words and {text.length}characters</p>
      </div></>
  )
}
