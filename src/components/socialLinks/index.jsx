import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const socialLinks = [
  { name: 'TW', link: 'https://twitter.com/creativeanthony', color: '#05B2FF' },
  { name: 'IG', link: 'https://www.instagram.com/anthonydesigner/', color: '#E112FC' },
  { name: 'LN', link: 'https://www.linkedin.com/in/anthonywiktor/', color: '#094290' },
  { name: 'BE', link: 'https://www.behance.net/ad_victorem', color: '#1F86FF' },
  { name: 'M', link: 'https://medium.com/advictorem', color: '#00A257' },
];

function SocialLinks({ styleClassName }) {
  return (
    <ul className="social-links">
      {socialLinks.map(({ name, link, color }) => (
        <li key={name}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className={`social-link ${styleClassName}`}
            style={{ '--color': color }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

SocialLinks.propTypes = {
  styleClassName: PropTypes.string,
};

SocialLinks.defaultProps = {
  styleClassName: 'social-link-footer',
};

export default SocialLinks;
