import React from 'react';
import PropTypes from 'prop-types';
import ContentGrid from './contentGrid';
import './style.scss';

function Content({ children }) {
  return (
    <section id="content" className="content">
      {children}
    </section>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContentGrid };
export default Content;
