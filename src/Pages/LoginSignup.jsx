import React from 'react'
import './css/signupLogin.css'

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
            <input type="text" name="name" placeholder='Enter Your Name' />
            <input type="email" name="email" placeholder='Enter Your Email' />
            <input type="password" name="password" placeholder='Enter Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="checkbox" />
          <p>By continuing, I agree to the terms of use & Privary Policy</p>
        </div>
      </div>
    </div>
  )
}
