import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/navigation';
import './style/style.scss';

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="container">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
