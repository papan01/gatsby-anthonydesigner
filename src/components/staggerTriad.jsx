import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { Power4 } from '../lib/gsap';
import useTimeline from '../hooks/animation';

function StaggerTriad({ autoPlay, children }) {
  const tl = useTimeline(autoPlay ? { delay: 1 } : { paused: true });
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  const refs = [];

  useEffect(() => {
    if (inView) tl.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    tl.set(refs, { y: 50 });
    tl.staggerTo(
      refs,
      1,
      {
        y: 0,
        opacity: 1,
        ease: Power4.easeOut,
      },
      0.1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children.map((child, index) => {
    return (
      <div
        key={child.type.name}
        ref={ref => {
          if (index === 0) {
            inViewRef(ref);
          }
          refs.push(ref);
        }}
        style={{ opacity: 0 }}
      >
        {child}
      </div>
    );
  });
}

StaggerTriad.propTypes = {
  children: PropTypes.node.isRequired,
  autoPlay: PropTypes.bool,
};

StaggerTriad.defaultProps = {
  autoPlay: false,
};

export default StaggerTriad;
