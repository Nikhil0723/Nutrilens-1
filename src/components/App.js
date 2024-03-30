import React, { useState } from 'react';

import Header from './header';
import Main from './routes/Main';
import Tab from './tab';
import { Switch,Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Auth from './authentication/auth/Auth';
import Title from './Title/Title';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true : false);
  
  return(
  <>
  { loggedIn ?
  <div className='main__wrapper '>
  <Header />
  <Title/>
  <Tab />
   <Main />
  </div>
  
  :
  <div className='main__wrapper'>
    <Switch>
          <Route exact path='/'component={Auth} />
  </Switch>
  </div>
    }
  </>
)};

export default App;
