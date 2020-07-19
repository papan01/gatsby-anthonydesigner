/* eslint-disable react/forbid-prop-types */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { animated } from 'react-spring';
import { ScrollContext } from '../scroller';
import { SCROLL_TOP_ANIMATION } from '../../constants';
import './style.scss';

function SquareLink({ children, fadeInStyle, cover, href, title, onMouseEnter, onMouseLeave }) {
  const [linkClassName, setLinkClassName] = useState('square-link-white');
  const scrollContext = useContext(ScrollContext);
  useEffect(() => {
    if (scrollContext.scrollValue > SCROLL_TOP_ANIMATION) {
      setLinkClassName('square-link-black ');
    } else {
      setLinkClassName('square-link-white');
    }
  }, [scrollContext.scrollValue]);
  return (
    <animated.div className="square-link" style={fadeInStyle}>
      <a
        href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onMouseEnter}
      >
        <Img fluid={{ ...cover.childImageSharp.fluid }} className="square-img" />
        {children}
      </a>
    </animated.div>
  );
}

SquareLink.propTypes = {
  children: PropTypes.node,
  fadeInStyle: PropTypes.shape({
    transform: PropTypes.object,
    opacity: PropTypes.object,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cover: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

SquareLink.defaultProps = {
  children: null,
  title: '',
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export default SquareLink;
