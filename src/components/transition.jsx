import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';

let pageYOffset = 0;
export function setPageYOffset() {
  pageYOffset = window.pageYOffset;
}
export const getPageYOffset = () => {
  const cachedValue = pageYOffset;
  pageYOffset = 0;
  return cachedValue;
};

const timeout = 1000;
const easing = 'cubic-bezier(0.8, 0, 0.2, 1)';
const getTransitionStyles = {
  entering: {
    transform: 'translate(100%)',
  },
  entered: {
    width: '100%',
    position: 'relative',
    zIndex: 2,
    top: 0,
    left: 0,
    transition: `transform ${timeout}ms ${easing}`,
    transform: 'none',
  },
  exiting: {
    width: '100%',
    position: 'absolute',
    zIndex: 0,
    left: 0,
    transitionProperty: 'transform, opacity',
    transitionDuration: `${timeout}ms`,
    transitionTimingFunction: easing,
    transform: 'translate(-50%)',
    opacity: 0,
  },
};

function Transition({ children, location }) {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: 0,
          exit: timeout,
        }}
      >
        {status => {
          const y = status === 'exiting' ? getPageYOffset() : 0;
          return (
            <div
              style={{
                ...getTransitionStyles[status],
                ...(status === 'exiting' && {
                  top: `-${y}px`,
                  '--fixedImgTopOffset': `${y}px`,
                }),
              }}
            >
              {children}
            </div>
          );
        }}
      </ReactTransition>
    </TransitionGroup>
  );
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default Transition;
