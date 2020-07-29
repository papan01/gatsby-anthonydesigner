import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Space({ styleClassName }) {
  return <div className={styleClassName} />;
}

Space.propTypes = {
  styleClassName: PropTypes.string,
};

Space.defaultProps = {
  styleClassName: 'space-100-200',
};

export default Space;
