import React from 'react'
function Alert(props) {
    const captically=(word)=>{
     const lower=word.toLowerCase();
     return lower.charAt(0).toUpperCase()+lower.slice(1);
        
    }
    return (
  
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{captically(props.alert.type)}</strong> :{props.alert.msg}

</div>
    
  )
}

export default Alert
