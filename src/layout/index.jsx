import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/navigation';
import Scroller from '../components/scroller';
import Transition from '../components/transition';
import './style/style.scss';

function Layout({ children, location }) {
  return (
    <Scroller>
      <Navigation />
      <Transition location={location}>{children}</Transition>
    </Scroller>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default Layout;
