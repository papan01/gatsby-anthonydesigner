import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { ScrollContext } from '../scroller';
import SCROLL_TOP_ANIMATION from '../../constants';
import './style.scss';

function SquareLink({ children, fadeInStyle, cover, href, title, onMouseOver, onMouseLeave }) {
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
    <div
      className="square-link"
      style={fadeInStyle}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseOver}
    >
      <a href={href} title={title} className={linkClassName}>
        <Img fluid={{ ...cover.childImageSharp.fluid }} className="square-img" />
        {children}
      </a>
    </div>
  );
}

SquareLink.propTypes = {
  children: PropTypes.node,
  fadeInStyle: PropTypes.shape({
    transform: PropTypes.string,
    opacity: PropTypes.number,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cover: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

SquareLink.defaultProps = {
  children: null,
  title: '',
  onMouseOver: () => {},
  onMouseLeave: () => {},
};

export default SquareLink;
