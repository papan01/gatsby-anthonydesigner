import { useState, useEffect } from 'react';

export default function useLogos(color, timeline, effect) {
  const [globalColor, setGlobalColor] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);

  const onMouseEnter = () => {
    setGlobalColor(color);
    timeline.play();
  };
  const onMouseLeave = () => {
    setGlobalColor(null);
    timeline.reverse();
  };

  return { globalColor, onMouseEnter, onMouseLeave };
}
