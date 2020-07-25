/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import { Power3 } from '../../lib/gsap';
import useLogos from './useLogos';
import useTimeline from '../../hooks/animation';
import SquareLink from '../squareLink';

const TITLE = 'ESPN';
const COLOR = '#941608';
const LINK = 'https://advictorem.agency/case-studies/espn';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "espn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function ESPN() {
  const { cover } = useStaticQuery(query);
  const tl = useTimeline({ paused: true });
  const mask = useRef(`mask${Math.random()}`);
  const letters = useRef();
  const line = useRef();
  const { globalColor, onMouseEnter, onMouseLeave } = useLogos(COLOR, tl, () => {
    tl.to(line.current, 0.3, { x: -52, ease: Power3.easeIn });
    tl.staggerTo(letters.current.childNodes, 0.5, { x: 20, opacity: 0, ease: Power3.easeIn }, 0.05, '-=.3');
    tl.set(line.current, { x: 52 });
    tl.set(letters.current.childNodes, { x: -20 });
    tl.staggerTo(letters.current.childNodes, 0.5, { x: 0, opacity: 1, ease: Power3.easeOut }, 0.05);
    tl.to(line.current, 0.3, { x: 0, ease: Power3.easeOut }, '-=.5');
  });
  return (
    <SquareLink cover={cover} href={LINK} title={TITLE} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {globalColor && <Global styles={{ body: { backgroundColor: globalColor } }} />}
      <svg viewBox="-50 0 151.2 12.8" width="100%">
        <defs>
          <mask id={mask.current} x="0" y="0" width="51.2" height="12.8">
            <rect width="151.2" height="12.8" x="-50" y="0" fill="#fff" />
            <rect ref={line} width="51.1" height="1.5" x=".1" y="3.5" fill="#000" />
          </mask>
        </defs>
        <g ref={letters} fill="currentColor" mask={`url(#${mask.current})`}>
          <path d="M37.58,12.78l1.05-9.17L39.09,0h4.16h6.01c1.22,0,2.39,1.2,1.83,3.61l-0.1569,1.32H50.94L50,12.78h-0.01h-4.12l1.0188-9.17h-4.0766L41.7,12.78H37.58z" />
          <path d="M35.87,0h-9.43l-0.41,3.61L25,12.78h4.07l0.59-4.93H35.59c1.0099,0.1,1.93-0.57,2.15-1.56l0.39-2.55C38.56-0.33,35.87,0,35.87,0z M33.86,4.93h-3.85l0.16-1.32h3.81L33.86,4.93z" />
          <path d="M25,6.85c0,0.15-0.47,3.31-0.47,3.31c-0.29,1.45-1.52,2.52-3,2.61H11.8l0.44-3.42h8.31l0.19-1.5h-6.13 c-0.06,0-0.12-0.01-0.18-0.01h-0.1c-0.01,0-0.03-0.01-0.04-0.01c-0.05,0-0.09-0.01-0.14-0.02c-0.4-0.08-0.78-0.29-1.07-0.63 c-0.02-0.02-0.04-0.04-0.06-0.07C13.01,7.1,13,7.08,12.99,7.06c-0.07-0.09-0.13-0.1801-0.18-0.28c-0.04-0.07-0.07-0.16-0.1-0.24 c-0.01-0.03-0.02-0.05-0.03-0.08c-0.11-0.33-0.16-0.71-0.12-1.13c0-0.15,0.31-2.72,0.31-2.72c0.13-0.66,0.45-1.24,0.89-1.69c0.03-0.04,0.06-0.07,0.1-0.1c0.01-0.02,0.03-0.03,0.04-0.04C14.43,0.26,15.05,0,15.52,0h10.42l-0.49,3.61h-8.77l-0.13,1.32h6.57c0.05-0.01,0.1-0.01,0.15-0.01c0.01,0,0.02,0,0.03,0.01C24.3,5,25.05,5.85,25,6.85z" />
          <path d="M11.1,12.78H0L1.49,0h4.385h6.755l-0.47,3.61H5.3948L5.2192,4.93H12.07l-0.36,2.92H4.85L4.6302,9.3585L4.63,9.36h6.88L11.1,12.78z" />
        </g>
      </svg>
    </SquareLink>
  );
}

export default ESPN;
