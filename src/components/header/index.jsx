import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useTrail, animated } from 'react-spring';
import { ScrollContext } from '../scroller';
import { SCROLL_TOP_ANIMATION, HEADER_DELAY } from '../../constants';
import './style.scss';

const WHITE = { background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' };
const BLACK = { background: 'transparent', color: 'rgb(255, 255, 255)' };

function Header({ titles }) {
  const scrollContext = useContext(ScrollContext);
  const [headerColor, setHeaderColor] = useState(WHITE);
  const [titleProps] = useTrail(titles.length, () => ({
    from: { transform: 'matrix(1,0,0,1,0,30)', opacity: 0 },
    to: { transform: 'matrix(1,0,0,1,0,0)', opacity: 1 },
    delay: HEADER_DELAY,
  }));

  useEffect(() => {
    if (scrollContext.scrollValue > SCROLL_TOP_ANIMATION) {
      setHeaderColor(BLACK);
    } else {
      setHeaderColor(WHITE);
    }
  }, [scrollContext.scrollValue]);

  return (
    <header className="header" style={headerColor}>
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
