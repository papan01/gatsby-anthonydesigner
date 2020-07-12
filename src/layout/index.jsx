import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/navigation';
import Scroller from '../components/scroller';
import './style/style.scss';

function Layout({ children }) {
  return (
    <Scroller>
      <Navigation />
      <div className="container">{children}</div>
    </Scroller>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
