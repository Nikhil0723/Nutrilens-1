import React from 'react';

import './header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Nutrilens, Uncovering food sercets <span role="img" aria-label="shopping cart">🛒</span></h1>
    <button onClick={()=>{
      localStorage.removeItem('token');
      window.location.href = '/';
    }}>Logout</button>
  </header>
  
);

export default Header;
