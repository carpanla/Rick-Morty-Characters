import React from 'react';
import logo from '../images/logo.png'

 const Header = () => {
     return <header className='header'>
         <img className='header__logo' src={logo} alt='logo'/>
     </header>
 }

 export default Header;