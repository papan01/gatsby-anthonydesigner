import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ScrollContext = React.createContext({ scrollValue: 0 });

function Scroller({ children }) {
  const [scroller, setScroller] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const handleScroll = () => {
        setScroller(document.documentElement.scrollTop);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    return () => {};
  }, []);

  return <ScrollContext.Provider value={{ scrollValue: scroller }}>{children}</ScrollContext.Provider>;
}

Scroller.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Scroller;
