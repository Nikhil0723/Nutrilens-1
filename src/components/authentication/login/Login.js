import React from 'react'
import { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSubmit=()=>{
    console.log(form)

    axios.post('https://backend-nutrilens.vercel.app/api/auth/signin', 
    {
      email:form.email,
      password:form.password
    })
    .then(res=>{
      console.log(res)
      localStorage.setItem('token', res.data.Authorization);
      window.location.href = '/';

    }).catch(err=>{
      console.log(err)
    })
  }

  return ( 
    <div className='auth-login'>
     
      <div className="login-form">
        <div className='input-container'>
          <label htmlFor="">USERNAME</label>
          <input type="text" placeholder='Username' onChange={ (e) => setForm({...form, email: e.target.value})} />
        </div>
        <div className='input-container'>
          <label htmlFor="">PASSWORD</label>
          <input type="text" placeholder='Password' onChange={ (e) => setForm({...form, password: e.target.value})}  />
        </div>
      </div>
      <div className="login-footer">
      <p href="#">Forgot your password?</p>
      <button onClick={handleSubmit} >Login &rarr;</button>
      </div>
    </div>
  )
}

export default Login
