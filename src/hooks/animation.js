import { useRef, useEffect } from 'react';
import { TimelineMax } from '../lib/gsap';

const useTimeline = (options = {}) => {
  const tl = useRef(new TimelineMax(options));

  useEffect(() => () => tl.current && tl.current.kill(), []);

  return tl.current;
};

export default useTimeline;

export const useControlledTimeline = (options, playProp) => {
  const tl = useTimeline(options);

  useEffect(() => {
    tl.paused(!playProp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playProp]);

  return tl;
};
