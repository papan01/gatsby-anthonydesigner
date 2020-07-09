import React from 'react';
import Navigation from '../components/navigation';
import Header from '../components/header';
import './style/style.scss';

function Layout() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
