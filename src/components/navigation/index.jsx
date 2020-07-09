import React from 'react';
import { Link } from 'gatsby';
import Logo from './logo';
import './style.scss';

function Navigation() {
  return (
    <div className="top-nav-bar">
      <Logo />
      <nav className="navigation">
        <div>
          <Link className="navigation-link" to="/about/">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;
