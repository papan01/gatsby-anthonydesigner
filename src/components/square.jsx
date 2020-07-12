import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

function Square({ children, fadeInStyle, cover }) {
  return (
    <div style={fadeInStyle}>
      <Img fluid={{ ...cover.childImageSharp.fluid }} />
      {children}
    </div>
  );
}

Square.propTypes = {
  children: PropTypes.node,
  fadeInStyle: PropTypes.shape({
    transform: PropTypes.string,
    opacity: PropTypes.number,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cover: PropTypes.object.isRequired,
};

Square.defaultProps = {
  children: null,
};

export default Square;
