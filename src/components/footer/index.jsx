/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import Space from '../space';
import './style.scss';

const socialLinks = [
  { name: 'TW', link: 'https://twitter.com/creativeanthony', color: '#05B2FF' },
  { name: 'IG', link: 'https://www.instagram.com/anthonydesigner/', color: '#E112FC' },
  { name: 'LN', link: 'https://www.linkedin.com/in/anthonywiktor/', color: '#094290' },
  { name: 'BE', link: 'https://www.behance.net/ad_victorem', color: '#1F86FF' },
  { name: 'M', link: 'https://medium.com/advictorem', color: '#00A257' },
];

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
        <div className="social-links">
          <span className="sub-title">GET IN TOUCH</span>
          <Space styleClassName="space-20" />
          <ul>
            {socialLinks.map(({ name, link, color }) => (
              <li key={name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className="social-links"
                  style={{ '--color': color }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
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
