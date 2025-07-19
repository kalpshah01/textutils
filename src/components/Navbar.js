// import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props,title="Set title here",Aboutustext="set abouttext here") {
  return (
   <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">{props.Aboutustext}</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">Contct </a>
        </li>
       
      </ul>
     
    </div>
     {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">Search</button>
      </form> */}
      {/* text color set according the mode */}
   {/* <div className="d-flex">
    <div className="bg-primary rounded mx-2" onClick={()=>{props.MytoggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid gold'}} ></div>
    <div className="bg-danger rounded mx-2" onClick={()=>{props.MytoggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid gold'}} ></div>
    <div className="bg-success rounded mx-2" onClick={()=>{props.MytoggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid gold'}} ></div>
    <div className="bg-warning rounded mx-2" onClick={()=>{props.MytoggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid gold'}} ></div>
    <div className="bg-black rounded mx-2" onClick={()=>{props.MytoggleMode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid gold'}} ></div>
    <div className="bg-light rounded mx-2" onClick={()=>{props.MytoggleMode('light')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid gold'}} ></div>
    
   </div> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' :'light'}`}>
        
  <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.MytoggleMode(props.mode === 'light' ? 'dark' :'light')}} id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
</div>
 
  </div>
</nav>   
  )
}

Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  Aboutustext:PropTypes.string
}

