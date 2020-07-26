import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function SectionTitle({ viewBox, path }) {
  return (
    <span className="section-title">
      <svg viewBox={viewBox}>
        <path d={path} />
      </svg>
    </span>
  );
}

SectionTitle.propTypes = {
  viewBox: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SectionTitle;
