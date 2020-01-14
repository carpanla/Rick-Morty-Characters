import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../stylesheets/header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
