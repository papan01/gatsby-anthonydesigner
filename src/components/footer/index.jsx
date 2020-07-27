import React from 'react';
import Space from '../space';
import './style.scss';

function Footer() {
  return (
    <footer className="content">
      <Space />
      <div className="footer-container">
        <div className="social-links">
          <span className="sub-title">GET IN TOUCH</span>
          <div style={{ height: '20px' }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
