import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Content({ children }) {
  return (
    <section id="content" className="content">
      <div className="content-lining">{children}</div>
    </section>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
