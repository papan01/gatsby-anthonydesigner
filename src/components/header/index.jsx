import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="header" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>
      <div className="header-lining">
        <h1 className="header-title">
          <div style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 1 }}>Shifting brands from</div>
          <div style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 1 }}>giving up to moving</div>
          <div style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 1 }}>forward.</div>
        </h1>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
