import React from 'react';
import PropTypes from 'prop-types';

function ContentGrid({ children, styleClassName }) {
  return <div className={styleClassName}>{children}</div>;
}

ContentGrid.propTypes = {
  children: PropTypes.node.isRequired,
  styleClassName: PropTypes.string,
};

ContentGrid.defaultProps = {
  styleClassName: 'content-grid',
};

export default ContentGrid;
