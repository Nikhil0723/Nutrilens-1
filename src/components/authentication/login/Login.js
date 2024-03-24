import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='auth-login'>
     
      <div className="login-form">
        <div className='input-container'>
          <label htmlFor="">USERNAME</label>
          <input type="text" placeholder='Username' />
        </div>
        <div className='input-container'>
          <label htmlFor="">PASSWORD</label>
          <input type="text" placeholder='Password' />
        </div>
      </div>
      <div className="login-footer">
      <p href="#">Forgot your password?</p>
      <button>Login &rarr;</button>
      </div>
    </div>
  )
}

export default Login
