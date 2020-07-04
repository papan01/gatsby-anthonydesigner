import React from 'react';
import Logo from './logo';
import './style.scss';

function Header() {
  return (
    <nav className="top-nav-bar">
      <Logo />
    </nav>
  );
}

Header.propTypes = {};

export default Header;
