import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Power4 } from '../../lib/gsap';
import { ScrollContext } from '../scroller';
import { SCROLL_TOP_ANIMATION } from '../../constants';
import useTimeline from '../../hooks/animation';
import './style.scss';

const WHITE = { background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' };
const BLACK = { background: 'transparent', color: 'rgb(255, 255, 255)' };

function Header({ titles }) {
  const scrollContext = useContext(ScrollContext);
  const [headerColor, setHeaderColor] = useState(WHITE);
  const tl = useTimeline({ paused: true });
  const headline = useRef();
  useEffect(() => {
    if (!titles) return;

    const lines = headline.current.querySelectorAll('.line');
    tl.set(lines, { y: 50 });
    tl.staggerTo(
      lines,
      0.8,
      {
        y: 0,
        opacity: 1,
        ease: Power4.easeOut,
      },
      0.075,
      0,
    );
    tl.restart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titles]);

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
        <h1 ref={headline} className="header-title">
          {titles.map(line => (
            <div key={line} className="line">
              {line}
            </div>
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
