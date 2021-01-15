import React from 'react'
import "./Sign.css"
const sign = () => {
    return (
        <div>
            <div className="container">

<form id="signup">

    <div className="header">
    
        <h3>Sign Up</h3>
        
        <p>You want to fill out this form</p>
        
    </div>
    
    <div className="sep"></div>

    <div className="inputs">
    
        <input type="email" placeholder="e-mail" autofocus />
    
        <input type="password" placeholder="Password" />
        
  
        
        <a id="submit" href="#">SIGN UP FOR INVITE NOW</a>
    
    </div>

</form>

</div>
        </div>
    )
}

export default sign
