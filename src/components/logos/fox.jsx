/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import { Power2, Elastic } from '../../lib/gsap';
import useLogos from './useLogos';
import useTimeline from '../../hooks/animation';
import SquareLink from '../squareLink';

const TITLE = 'FOX';
const COLOR = '#E6E147';
const LINK = 'https://advictorem.agency/case-studies/fox-digital';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "fox.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function FOX() {
  const { cover } = useStaticQuery(query);
  const tl = useTimeline({ paused: true });
  const svg = useRef();
  const lettersGroup = useRef();
  const { globalColor, onMouseEnter, onMouseLeave } = useLogos(COLOR, tl, () => {
    const letters = lettersGroup.current.childNodes;
    tl.set(letters, { transformOrigin: 'center bottom' });
    tl.to(letters, 0.3, {
      y: 30,
      opacity: 0,
      ease: Power2.easeIn,
    });

    tl.set(letters, {
      y: -40,
      opacity: 0,
    });

    tl.to(letters, 0.3, {
      y: 0,
      opacity: 1,
      ease: Power2.easeIn,
    });

    tl.to(letters, 0.2, {
      scaleX: 1.08,
      scaleY: 0.5,
      ease: Power2.easeOut,
    });

    tl.to(letters, 0.5, {
      scaleX: 1,
      scaleY: 1,
      ease: Elastic.easeOut.config(1, 0.5),
    });

    tl.timeScale(1.3);
  });
  return (
    <SquareLink cover={cover} href={LINK} title={TITLE} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {globalColor && <Global styles={{ body: { backgroundColor: globalColor } }} />}
      <svg viewBox="-20 -40 89.09 105" width="53%" fill="currentColor" style={{ marginTop: 10 }}>
        <g ref={lettersGroup}>
          <path d="M49.09003 21.07h-6.62006l-3.06-5.25-3 5.25H30l6.25-10.84998L30.39001.08001h6.53998l2.62 4.48999L42.13.08001h6.40997L42.75 10.15002 49.09003 21.07z" />
          <path d="M22.32001.20017c-5.54999.35004-9.77002 5.13-9.41998 10.67999h-.04004c0 5.56006 4.51001 10.07001 10.07001 10.07001S33 16.44022 33 10.88016c.03003-.41998.03003-.84998 0-1.26996-.34998-5.54999-5.13-9.76001-10.67999-9.41003zm2.41998 15.02001c-.04999.90998-.83002 1.60999-1.73999 1.56-.94-.02002-1.69-.77997-1.70001-1.71997v-8.37c-.01996-.97003.73004-1.79003 1.70001-1.84002h.01001c.97998.02997 1.75.85999 1.71997 1.84003v8.37h.01001v.15996z" />
          <path d="M6 8.57h5.79999v5.71002H6V21.13H0V0h12.66998l.38 5.79999H6V8.57z" />
        </g>
      </svg>
    </SquareLink>
  );
}

export default FOX;
