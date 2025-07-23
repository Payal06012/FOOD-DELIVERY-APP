import React, { useState } from 'react'
import './Login_pop_up.css'
import { assets } from '../../assets/frontend_assets/assets';

const Login = ({setShowLogin}) => {

  const [current_state , setCurrent_state] = useState("Sign up");

  return (
    <div class="Login_Popuo">
      <form action="" className="login-pop-up-container">
    
       <div className="login-pop-up-title">
     
        <h2>   {current_state}</h2>
        <img  onClick={()=> setShowLogin(false)} src={assets.cross_icon}></img>
       </div>

<div className="login-pop-up-input">
  {current_state === "Log in" ? <></> :   <input type="text"  placeholder='Your Name' required  />}
  
  <input type="email" placeholder='Your E mail'  required/>
   <input type="password" placeholder='Set Password'  required/>

</div>
<button>{current_state === "Sign up" ? "Create Account" : "Log in" }</button>

<div className="login-pop-up-condition">
  <input type="checkbox"  required />
  <p>By continuing , I agree to the terms of use and privacy policy</p>

</div>


{current_state === "Log in" ?
<p>Create a new Account? <span onClick ={()=>setCurrent_state("Sign up")}>Click here</span></p> :
<p>Already have an Account ? <span onClick ={()=>setCurrent_state("Log in")}>Click here</span></p>
}

      </form>
      
    </div>
  )
}

export default Login ;

