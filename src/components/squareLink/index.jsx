import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './style.scss';

function SquareLink({ children, fadeInStyle, cover, href, title, globalColor }) {
  return (
    <div className={`square-link ${globalColor}`} style={fadeInStyle}>
      <a href={href} title={title}>
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
  globalColor: PropTypes.string.isRequired,
};

SquareLink.defaultProps = {
  children: null,
  title: '',
};

export default SquareLink;
