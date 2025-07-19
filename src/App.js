// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
  }
  const removebodyclass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    
  }
const toggleMode=(cls)=>{
  removebodyclass();
  console.log(cls);
  document.body.classList.add('bg-'+cls)
  if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#3a516d';
    showAlert('dark mode enabled','success')
    document.title="textutils - Dark mode";
    // setInterval(() => {
    //   document.title="Textutils is amazing Mode";
      
    // }, 2000);
    // setInterval(() => {
    //   document.title="Textutils install now";
    // }, 1500);
  }

  
  else{
  
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('light mode enalbed','success');
    document.title="textutils - light mode";
  }
  
}
  return (

    <>
{/*<Router>*/}
<Navbar  title="Textutils" Aboutustext="about textutiles" mode={mode} MytoggleMode={toggleMode} />
<Alert alert={alert}/>
{/* <Navbar /> */}
<div className="container my-3">
      {/* <Routes>
        // {/* exact use to match exact name as in path like /user and /user/home if exact use then home render oteher wise only user render*/}
          {/* <Route exact path="/Aboutus" element={<Aboutus />}/> */}
{/* <Aboutus/> */}
          
         {/* <Route>
          
          <Route exact path="/" element={<TextForm heading="entere the text for analyes" mode={mode} showAlert={showAlert}/>}/>

            
          </Route>
        </Routes> */}
        <TextForm heading="entere the text for analyes" mode={mode} showAlert={showAlert}/>
</div>
    {/* </Router> */}
    </>
  );
}

export default App;
