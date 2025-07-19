import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
   //    console.log("upper case clicked"+text); 
   //rect not support direct update variable like text='hdsf' 
    let newText=text.toUpperCase();
    setText(newText);
props.showAlert('coverted to uppercase','success');
    }
    const handledownClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('coverted to Lowercase','success');
    }
   // we create state for onchange because if not then we can't type
    const handleOnChange=(event)=>{
 //   console.log("on change clicked");
    setText(event.target.value);
    }
    const handledclrClick=()=>{
      let newText='';
      setText(newText);
      props.showAlert('all clering text','warning');
    }
    const handledvowClick=()=>{
      let newText=(text.match(/[aeiouAEIOU]/g)||[]).length;
  //    setText(newText);
      countvowels(newText);
      props.showAlert('finding number of vowels','success');
    }
    const handlednovowClick=()=>{
      let newText=(text.match(/[bcdfghjklmnpqrstvwxyz]/gi)||[]).length;
  //    setText(newText);
      countvowel(newText);
  props.showAlert('finding number of novowels','success');
    }
    const copyText=()=>{
      var text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
        props.showAlert('You are copy text','warning');
    }
    const handleSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
        props.showAlert('you removeing the space?','danger');
    }
    const handleLines=()=>{
   
      setText(prev=>prev+'\n');
      let Text=document.getElementById('myBox');
      Text.focus();
        props.showAlert('are you sure to start new line','danger');
    }
    const [text, setText] = useState('Enter the text here');
    const[vowls,countvowels]=useState();
    const[novowls,countvowel]=useState();
    return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white' :'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Textarea Form</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{
    backgroundColor:props.mode === 'dark' ? 'grey' :'white',
    color:props.mode === 'dark' ? 'white' :'black'
  }}></textarea>
</div>
  <button className="btn btn-primary" onClick={handleUpClick} >Convert into uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handledownClick} >Convert into Lowecase</button>
  <button className="btn btn-primary mx-2" onClick={handledclrClick} >Clear Case</button>
  <button className="btn btn-primary mx-2" onClick={handledvowClick} >Find Vowels</button>
  <button className="btn btn-primary mx-2" onClick={handlednovowClick} >no Vowels</button>
  <button className="btn btn-primary mx-2" onClick={copyText} >Copy text</button>
  <button className="btn btn-primary mx-2" onClick={handleSpace} >Remove extraspace</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleLines} >New line</button>


    </div>
    <div className="container my-2" style={{color:props.mode === 'dark' ? 'white' :'black'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words,{text.length}characters </p>
<p>{ 0.008 * text.split(" ").length } Minutes read</p>
{/* <p>{text}</p> */}
<h3>Preview</h3>
<p>{text.length>0 ?text:'enter text first'}</p>
   <p><strong>Vowel Count:</strong> {vowls}</p>
   <p><strong>Vowel Count:</strong> {novowls}</p>
    </div>
    </>
  )
}
    