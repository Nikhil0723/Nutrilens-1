import React, { useState } from 'react';

import Header from './header';
import Main from './routes/Main';
import Footer from './footer';
import { Switch,Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignUp from './authentication/signup/SignUp';
import Login from './authentication/login/Login';
import AuthLayout from './authLayout/AuthLayout';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true : false);
  
  return(
  <>
  { loggedIn ?
  <div>
  <Header />
   <Main />
   <Footer />
  </div>
  
  :
  <div>
    <Switch>
          <Route exact path='/'component={AuthLayout} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
  </Switch>
  </div>
    }
  </>
)};

export default App;
