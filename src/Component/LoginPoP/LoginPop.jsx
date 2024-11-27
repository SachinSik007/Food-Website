import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPop = ({setShowLogin}) => {

    const [curState, setCurState] = useState("Login")

  return (
    <div className='login-pop'>
      <form className='login-pop-container'>
        <div className='login-pop-title'>
            <h2> {curState} </h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-pop-inputs'>
              {curState==="Login"?<></>:<input type='text' placeholder='Your Name' required />}
            <input type='email' placeholder='Your Email' required />
            <input type='password' placeholder='Your Password' required />
        </div>
        <button> {curState==="Sign Up"?"Create Account":"Login"} </button>
        <div className='login-pop-condition'>
            <input type='checkbox' required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {curState==="Login"
         ?<p>Create  a New Account? <span onClick={()=>setCurState("Sign Up")}>Click Here</span></p>
         :<p>Already have an account? <span onClick={()=>setCurState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPop
