import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useSprings, animated } from 'react-spring';
import './style.scss';

function Header({ titles }) {
  const [titleProps] = useSprings(titles.length, i => ({
    from: { transform: 'matrix(1,0,0,1,0,30)', opacity: 0 },
    to: { transform: 'matrix(1,0,0,1,0,0)', opacity: 1 },
    delay: i * 100,
  }));
  return (
    <header className="header" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>
      <div className="header-lining">
        <h1 className="header-title">
          {titleProps.map((props, index) => (
            <animated.div key={titles[index]} style={props}>
              {titles[index]}
            </animated.div>
          ))}
        </h1>
        <Link to="#content" title="Scroll down" className="header-content-link ">
          <div className="animation-line-block">
            <div className="animation-line" />
          </div>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
