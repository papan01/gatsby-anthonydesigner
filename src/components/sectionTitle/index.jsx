import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function SectionTitle({ viewBox, path, styleClassName }) {
  return (
    <span className={`section-title ${styleClassName}`}>
      <svg viewBox={viewBox}>
        <path d={path} />
      </svg>
    </span>
  );
}

SectionTitle.propTypes = {
  viewBox: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  styleClassName: PropTypes.string,
};

SectionTitle.defaultProps = {
  styleClassName: '',
};

export default SectionTitle;
