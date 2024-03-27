import { useState } from 'react'
import React from 'react'
import './SignUp.css'
import { Button } from 'reactstrap'
import axios from 'axios'

const SignUp = () => {
  
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleSubmit=()=>{
    console.log(form)

    axios.post('https://backend-nutrilens.vercel.app/api/auth/signup', 
    {
      name:form.name,
      username:form.username,
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
    <div className='auth-register'>
    <div className="register-form">
      <div className='input-container'>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Name'  onChange={(e) => {
          console.log(e.target.value)
          setForm({...form, name: e.target.value})}} />
      </div>
      <div className='row'>
      <div className='input-container'>
        <label htmlFor="">USERNAME</label>
        <input type="text" placeholder='Username' onChange={ (e) => setForm({...form, username: e.target.value})} />
      </div>
      <div className='input-container'>
        <label htmlFor="">EMAIL</label>
        <input type="text" placeholder='Username' onChange={ (e) => setForm({...form, email: e.target.value})} />
      </div>
      </div>
      <div className='row'>
      <div className='input-container'>
        <label htmlFor="">PASSWORD</label>
        <input type="text" placeholder='Username' onChange={ (e) => setForm({...form, password: e.target.value})} />
      </div>
      <div className='input-container'>
        <label htmlFor="">CONFIRM PASSWORD</label>
        <input type="text" placeholder='ConfirmPassword' onChange={ (e) => setForm({...form, confirmPassword: e.target.value})} />
      </div>
      </div>
      
    </div>
    <div className="register-footer">
    <Button onClick={handleSubmit}>Register &rarr;</Button>
    </div>
  </div>
  )
}

export default SignUp
