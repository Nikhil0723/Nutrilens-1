import React from 'react';

import './header.css';

const Header = () => (
  <header className="header">
    
    <button >About us</button>
    <button onClick={()=>{
      localStorage.removeItem('token');
      window.location.href = '/';
    }}>Logout</button>
  </header>
  
);

export default Header;
