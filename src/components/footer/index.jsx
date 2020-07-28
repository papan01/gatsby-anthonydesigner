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
  return (
    <footer className="content">
      <Space />
      <div className="footer-container">
        <div className="social-links">
          <span className="sub-title">GET IN TOUCH</span>
          <div style={{ height: '20px' }} />
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
