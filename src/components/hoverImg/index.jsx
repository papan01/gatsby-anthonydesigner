import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './style.scss';

function HoverImg({ src, video, text }) {
  return (
    <span className="hoverImg">
      {text}
      {window.matchMedia('(hover: hover)').matches && video ? (
        <video autoPlay loop playsInline muted>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Img className="img" fluid={{ ...src.childImageSharp.fluid }} />
      )}
    </span>
  );
}

HoverImg.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  src: PropTypes.object.isRequired,
  video: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

HoverImg.defaultProps = {
  video: false,
};

export default HoverImg;
