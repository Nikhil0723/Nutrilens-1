import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <div className='auth-register'>
    <div className="register-form">
      <div className='input-container'>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Name' />
      </div>
      <div className='row'>
      <div className='input-container'>
        <label htmlFor="">USERNAME</label>
        <input type="text" placeholder='Username' />
      </div>
      <div className='input-container'>
        <label htmlFor="">EMAIL</label>
        <input type="text" placeholder='Username' />
      </div>
      </div>
      <div className='row'>
      <div className='input-container'>
        <label htmlFor="">PASSWORD</label>
        <input type="text" placeholder='Username' />
      </div>
      <div className='input-container'>
        <label htmlFor="">CONFIRM PASSWORD</label>
        <input type="text" placeholder='Username' />
      </div>
      </div>
      
    </div>
    <div className="register-footer"><button>Register &rarr;</button>
    </div>
  </div>
  )
}

export default SignUp
