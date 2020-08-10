/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import SocialLinks from '../socialLinks';
import Space from '../space';
import './style.scss';

function Footer() {
  const clickToTop = () => {
    if (typeof window !== 'undefined') {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="content">
      <Space />
      <div className="footer-container">
        <div className="social-container">
          <span className="sub-title">GET IN TOUCH</span>
          <Space styleClassName="space-20" />
          <SocialLinks />
          <Space styleClassName="space-50-100" />
          <p className="link-murmur ">
            Want to move forward?
            <a href="mailto:hello@anthonydesigner.com">Drop a line.</a>
          </p>
        </div>
        <div className="back-to-top-block">
          <Space styleClassName="space-50-100" />
          <div
            role="button"
            onClick={clickToTop}
            onKeyPress={clickToTop}
            aria-label="scroll to top"
            className="back-to-top"
          >
            Back to top
          </div>
        </div>
      </div>
      <Space />
    </footer>
  );
}

export default Footer;
