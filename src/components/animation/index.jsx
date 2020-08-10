import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import './style.scss';

function AutoScale({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-15% 0px',
  });

  return (
    <div
      ref={ref}
      className="auto-scale"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'scale(0.8)',
      }}
    >
      {children}
    </div>
  );
}

AutoScale.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AutoScale;
