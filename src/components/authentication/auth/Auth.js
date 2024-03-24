import React, { useState } from 'react';
import './Auth.css';
import { BiLogoFacebookCircle, BiLogoGoogle, BiLogoLinkedin } from 'react-icons/bi';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className='auth-container'>
      <div className='auth-left'>
        <div className='left-container'>
          
          <div className='auth-head'>
            <h1 className='head-light'>Welcome to</h1>
            <h1 className='head-bold'>Nutrilens</h1>
            <p className='title'>
              The only tool you'll ever need
            </p>
          </div>
          <div className='auth-buttons'>
            <span></span>
            <p>Login, Register or sign in with</p>
            <div className='btn-container'>
              <button><BiLogoFacebookCircle /></button>
              <button><BiLogoGoogle /></button>
              <button><BiLogoLinkedin /></button>
            </div>
          </div>
        </div>
      </div>
      <div className='auth-right'>
      <div className="login-head">
        <h1>{showLogin ? 'Login' : 'Signup'}</h1>
        <p>{showLogin ? 'Don\'t have an account? ' : 'Already have an account? '} <span className='form-toggle' onClick={toggleForm}>{showLogin ? 'Sign up here.' : ' Log in here.'}</span></p>
      </div>
        {showLogin ? <Login  toggleForm={toggleForm} /> : <SignUp />}
        <p  className='toggle-form'>
          
        </p>
      </div>
    </div>
  );
}

export default Auth;
