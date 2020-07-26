import React from 'react';
import PropTypes from 'prop-types';

function ContentGrid({ children }) {
  return <div className="content-grid">{children}</div>;
}

ContentGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentGrid;
