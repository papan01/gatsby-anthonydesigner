import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useSprings, animated } from 'react-spring';
import * as easings from 'd3-ease';

const LogoMaskPaths = ['M.5 1.7l15.2 37.6', 'M18.3-.9L32.4 37', 'M35.6-.9L49.9 37'];
const AuthorPaths = [
  'M88.2 24.8h-4.5l-.7 1.6h-3.5L85.9 13l.2.2 6.4 13.4H89l-.8-1.8zm-3.6-2.5H87l-1.1-2.7-1.3 2.7zm12.5-2.4v6.6h-3.4V13.2c0-.2 0-.2.3 0l8.3 6.9v-6.7h3.4v13.3c0 .2 0 .2-.3 0l-8.3-6.8zm13.6-3.5h-3.5v-3h10.6v3h-3.5v10.2h-3.5V16.4zm16.7-3.1h3.5v13.1h-3.5v-5.1h-4.6v5.1h-3.5V13.3h3.5v5.1h4.6v-5.1zm5.1 6.6c0-3.7 3-6.7 6.7-6.7h.3a6.7 6.7 0 0 1 .6 13.4h-.6a6.7 6.7 0 0 1-7-6.6v-.1zm10.5 0c.1-1.9-1.4-3.6-3.4-3.7s-3.6 1.4-3.7 3.4v.3a3.6 3.6 0 0 0 3.4 3.7c1.9.1 3.6-1.4 3.7-3.4v-.3zm8.7 0v6.6h-3.4V13.2c0-.2 0-.2.3 0L157 20v-6.7h3.4v13.3c0 .2 0 .2-.3 0l-8.4-6.7zm9.4-6.6h3.8l2.6 4.8 2.6-4.8h3.8l-4.6 8v5.1h-3.5v-5l-4.7-8.1z',
  'M184.3 26.6c0 .2-.2.2-.2 0l-5.4-13.3h3.7l2.4 6.2 2.9-6.4c0-.2.2-.2.2 0l3 6.4 2.4-6.2h3.5l-5.4 13.3c0 .2-.2.2-.2 0l-3.4-7-3.5 7zm13.6-13.3h3.5v13.1h-3.5V13.3zm13.5 0h3.8l-4.5 5.8 5 7.5h-4.2l-3.2-4.8-1.1 1.3v3.4h-3.5V13.3h3.5v5.4l4.2-5.4zm8 3.1h-3.5v-3h10.6v3H223v10.2h-3.5V16.4zm7.3 3.5a7 7 0 1 1 7.4 6.7h-.3a6.6 6.6 0 0 1-7-6.4l-.1-.3zm10.6 0c.1-1.9-1.4-3.6-3.4-3.7s-3.6 1.4-3.7 3.4v.3a3.6 3.6 0 0 0 3.4 3.7c1.9.1 3.6-1.4 3.7-3.4v-.3zm8.6 6.5h-3.5V13.3h5.3c3.4 0 5.3 1.9 5.3 4.6.1 1.7-.9 3.2-2.4 3.8l2.7 4.6h-3.8l-2.4-4.2H246l-.1 4.3zm1.8-6.7c.8.1 1.6-.4 1.8-1.3v-.5c.1-.9-.5-1.7-1.4-1.8H246.2v3.4h1.6v.2z',
];

const AuthorProps = (index, isFadeIn) => {
  const delayArr = [0, 150];
  return {
    from: { opacity: 0, transform: index === 0 ? 'matrix(1.2,0,0,1,3,0)' : 'matrix(1.2,0,0,1,-21,0)' },
    to: { opacity: 1, transform: 'matrix(1,0,0,1,0,0)' },
    delay: isFadeIn ? delayArr[index] : delayArr[(index + 1) % delayArr.length],
    config: { duration: 300, easing: easings.easeCubicInOut },
    reset: true,
    reverse: !isFadeIn,
  };
};

function Logo() {
  const [isFirstLoad, setFirstLoad] = useState(true);
  const [hover, setHover] = useState(true);
  const [logoMaskProps] = useSprings(LogoMaskPaths.length, i => ({
    from: { s: i === 0 ? 40 : -40 },
    to: { s: 0 },
    delay: i * 200,
  }));

  const [authorProps, set] = useSprings(AuthorPaths.length, i => AuthorProps(i, true));

  useEffect(() => {
    if (isFirstLoad) {
      setTimeout(() => {
        setHover(false);
        setFirstLoad(false);
      }, 2000);
    } else {
      set(i => AuthorProps(i, hover));
    }
  }, [isFirstLoad, hover, set]);

  return (
    <Link to="/">
      <svg
        viewBox="0 0 302.4 38.4"
        className="logo-svg"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <title>Anthony Wiktor</title>
        <mask id="mask1">
          <g transform="translate(-108.5 -101)" fill="none" stroke="#fff" strokeWidth="9.2">
            {logoMaskProps.map(({ s }, index) => (
              <animated.path
                key={LogoMaskPaths[index]}
                d={LogoMaskPaths[index]}
                style={{
                  strokeDashoffset: s,
                  strokeDasharray: 50,
                }}
              />
            ))}
          </g>
        </mask>
        <path
          mask="url(#mask1)"
          transform="translate(108.5 101)"
          d="M-108.5-88.4l4.6-12.6 15.2 37.4h-9.8l-10-24.8zm14.2-11.8h9.6l8.6 23.2-4.2 14.4-14-37.6zm17.2 0h9.6l8.8 23.2-4.2 14.4-14.2-37.6z"
        />
        {authorProps.map(({ opacity, transform }, index) => (
          <animated.path
            key={AuthorPaths[index]}
            d={AuthorPaths[index]}
            style={{ opacity, transformOrigin: '0px 0px 0px' }}
            transform={transform}
          />
        ))}
      </svg>
    </Link>
  );
}

Logo.propTypes = {};

export default Logo;
