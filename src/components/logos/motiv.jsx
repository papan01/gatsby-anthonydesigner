/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import { TimelineMax, Power2, Linear } from '../../lib/gsap';
import useLogos from './useLogos';
import useTimeline from '../../hooks/animation';
import SquareLink from '../squareLink';

const TITLE = 'Motiv Ring';
const COLOR = '#2B2E2E';
const LINK = 'https://advictorem.agency/case-studies/motiv-ring';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "motiv.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function Motiv() {
  const { cover } = useStaticQuery(query);
  const tl = useTimeline({ paused: true });
  const linesGroup = useRef();
  const { globalColor, onMouseEnter, onMouseLeave } = useLogos(COLOR, tl, () => {
    const drawTL = new TimelineMax({ paused: true });
    drawTL.staggerTo(
      linesGroup.current.childNodes,
      1,
      {
        drawSVG: '100% 100%',
        ease: Linear.easeNone,
      },
      1,
    );
    drawTL.staggerTo(
      linesGroup.current.childNodes,
      1,
      {
        drawSVG: '200% 320%',
        ease: Linear.easeNone,
      },
      1,
    );

    tl.to(drawTL, 1.5, { progress: 1, ease: Power2.easeInOut });
  });
  return (
    <SquareLink cover={cover} href={LINK} title={TITLE} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {globalColor && <Global styles={{ body: { backgroundColor: globalColor } }} />}
      <svg viewBox="0 0 376 56.6" width="60%">
        <defs>
          <clipPath id="motivLogoClip">
            <path
              d="M345.8,53.3h0a3.13,3.13,0,0,1-2.7-1.7l-21.7-44A3,3,0,1,1,326.8,5l19,38.6L365,5a2.88,2.88,0,0,1,4-1.3,2.88,2.88,0,0,1,1.3,4l-21.9,44A2.84,2.84,0,0,1,345.8,53.3Zm-71.3,0a3,3,0,0,1-3-3V6.3a3,3,0,0,1,6,0v44A3.08,3.08,0,0,1,274.5,53.3Zm-69.5,0a3,3,0,0,1-3-3V9.3H183a3,3,0,0,1-3-3,3,3,0,0,1,3-3h44a3,3,0,0,1,3,3,3,3,0,0,1-3,3H208v41A3,3,0,0,1,205,53.3ZM30.5,53.2h0a3.13,3.13,0,0,1-2.7-1.7L11.8,19V50.1a3,3,0,0,1-3,3,3,3,0,0,1-3-3V6.1A3,3,0,0,1,8.1,3.2a3.22,3.22,0,0,1,3.5,1.7l19,38.6L49.8,4.9a3.09,3.09,0,0,1,3.4-1.6,2.9,2.9,0,0,1,2.3,2.9v44a3,3,0,0,1-6,0V18.9L33.2,51.6A2.92,2.92,0,0,1,30.5,53.2Z"
              transform="translate(-5.6 1.8)"
            />
            <path d="M120.2,2.7a25.6,25.6,0,1,0,25.6,25.6A25.65,25.65,0,0,0,120.2,2.7m0,6a19.6,19.6,0,1,1-19.6,19.6A19.63,19.63,0,0,1,120.2,8.7" />
          </clipPath>
        </defs>
        <g
          ref={linesGroup}
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 6.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        >
          <line clipPath="url(#motivLogoClip)" x1="3.2" y1="56.38" x2="3.2" y2="3.05" />
          <line clipPath="url(#motivLogoClip)" x1="3.2" y1="8.47" x2="24.98" y2="52.38" />
          <line clipPath="url(#motivLogoClip)" x1="25.9" y1="49.63" x2="47.55" y2="6" />
          <line clipPath="url(#motivLogoClip)" x1="46.65" y1="9.38" x2="46.98" y2="54.63" />
          <path
            clipPath="url(#motivLogoClip)"
            d="M119.25,5.27c11.6,0,23.95,9.85,24,22.83a22.91,22.91,0,0,1-14.67,21A23.68,23.68,0,0,1,99.41,37.6a22.89,22.89,0,0,1,2.83-24.33C102.69,12.73,109.1,5.25,119.25,5.27Z"
            transform="translate(-5.6 1.8)"
          />
          <line clipPath="url(#motivLogoClip)" x1="174.4" y1="8.1" x2="224.4" y2="8.1" />
          <line clipPath="url(#motivLogoClip)" x1="199.4" y1="10.97" x2="199.4" y2="55.1" />
          <line clipPath="url(#motivLogoClip)" x1="268.9" y1="5.1" x2="268.9" y2="55.1" />
          <line clipPath="url(#motivLogoClip)" x1="317.2" y1="5.4" x2="340.82" y2="55.04" />
          <line clipPath="url(#motivLogoClip)" x1="340.82" y1="49.97" x2="363.4" y2="5.5" />
        </g>
      </svg>
    </SquareLink>
  );
}

export default Motiv;
