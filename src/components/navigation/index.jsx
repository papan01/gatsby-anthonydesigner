import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import Logo from './logo';
import './style.scss';
import useTimeline from '../../hooks/animation';
import { Power4 } from '../../lib/gsap';

const PosedLinkWrapper = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
});

function Navigation() {
  const tl = useTimeline({ delay: 0.6 });
  const nav = useRef();

  useEffect(() => {
    tl.to(nav.current, 0.8, {
      opacity: 1,
      ease: Power4.easeOut,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="top-nav-bar">
      <Logo />
      <nav ref={nav} className="navigation">
        <Location>
          {({ location }) => (
            <PoseGroup>
              {location.pathname === '/' ? (
                <PosedLinkWrapper key="/about/">
                  <Link className="navigation-link" to="/about/">
                    About
                  </Link>
                </PosedLinkWrapper>
              ) : (
                <PosedLinkWrapper key="/">
                  <Link className="navigation-link" to="/">
                    Portfolio
                  </Link>
                </PosedLinkWrapper>
              )}
            </PoseGroup>
          )}
        </Location>
      </nav>
    </div>
  );
}

export default Navigation;
