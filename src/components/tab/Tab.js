import React from 'react';
import { Link } from 'react-router-dom';

import Camera from 'react-feather/dist/icons/camera';
import Clock from 'react-feather/dist/icons/clock';
import Search from 'react-feather/dist/icons/search';

import './tab.css';

const Tab = () => (
  <div className="footer">
    <Link className="footer__link" to="/" >
      <Camera />
      Scan
    </Link>
    <Link className="footer__link" to="/history">
      <Clock />
      History
    </Link>
    <Link className="footer__link" to="/search">
      <Search />
      Search by Food
    </Link>
  </div>
);

export default Tab;
