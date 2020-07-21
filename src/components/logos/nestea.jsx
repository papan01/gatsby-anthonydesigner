/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import { Power2 } from '../../lib/gsap';
import useLogos from './useLogos';
import useTimeline from '../../hooks/animation';
import SquareLink from '../squareLink';

const TITLE = 'Nestea';
const COLOR = '#07B0F3';
const LINK = 'https://advictorem.agency/case-studies/nestea';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "nestea.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function Nestea({ fadeInStyle }) {
  const { cover } = useStaticQuery(query);
  const tl = useTimeline({ paused: true });
  const signet = useRef();
  const text = useRef();
  const { globalColor, onMouseEnter, onMouseLeave } = useLogos(COLOR, tl, () => {
    tl.to(signet.current, 0.3, {
      transformOrigin: 'center bottom',
      skewX: 30,
      skewY: -10,
      ease: Power2.EaseInOut,
    });
    tl.to(signet.current, 0.3, {
      transformOrigin: 'center bottom',
      skewX: 0,
      skewY: 0,
      ease: Power2.EaseInOut,
    });
  });
  return (
    <SquareLink
      cover={cover}
      fadeInStyle={fadeInStyle}
      href={LINK}
      title={TITLE}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {globalColor && <Global styles={{ body: { backgroundColor: globalColor } }} />}
      <svg viewBox="0 -10 61.8 60.5" width="45%" fill="currentColor">
        <path
          ref={signet}
          d="M42.6,17.7c6.1-3.8,10-10.5,10.3-17.7C38.6,3.6,33.5,9.8,36.2,16.2c-2.1-2.9-7.8-5.7-10.3-6.9
    C24,14.6,25.3,21,29.2,24c2.6,1.9,6.1,2.2,9,0.9c0.7-0.7,1.2-1.6,1.3-2.6c4.2,5.5,13.4,1,18.4-3C50.9,15.2,45.7,16,42.6,17.7z
     M38.2,23.9c-1.7-0.3-4.9-2.7-6.9-4.8v0.1c-0.7-0.7-1.3-1.5-1.9-2.4c1.6,3.2,4.2,6,7.3,7.9c-7.6,1.5-12.3-5.4-10-13.9
    C33.1,13.3,41.1,19.7,38.2,23.9z M51.9,1.3C51,5.9,49.1,13.2,41,17.9c0.6-3.5,1.8-6.9,3.7-9.9c0.3-0.5,0.7-1,1.1-1.6
    c-3.7,4-5.7,8-6,12c-0.1,0.4-0.1,0.9-0.1,1.4C31.6,11.6,39.9,3.8,51.9,1.3z M40.2,22c1.2-1.2,4.5-1.9,6.8-2.4
    c1.2-0.1,2.2-0.1,2.9-0.2c-3.2-0.5-6.4-0.1-9.3,1.4c-0.3,0.1-0.6,0.3-0.8,0.4c1.5-3.3,8.3-7,16.6-1.9C54.3,20.6,45.4,27.1,40.2,22z"
        />
        <g ref={text}>
          <path
            d="M11.7,24.4h-2v10l-4.3-7.5c-0.5-0.9-1.2-1.7-2.2-2.2c-1-0.4-2.1-0.5-3.2-0.3c1.2,0.9,1.1,2.2,1.1,4v11.5h2
      v-9.8l0,0l3.7,6.1c2,3.3,3.2,4,5.9,4.3c-0.6-0.6-1-1.2-1-5.2L11.7,24.4z"
          />
          <path
            d="M19.4,38c-0.6,0-1.2-0.1-1.8-0.3V34h3l-0.4-2h-2.6v-3.1h2.7c0.5,0,1,0,1.6,0.1l-0.5-2.2h-7.6
      c0.8,0.5,0.7,1.8,0.7,2.8V37c0,2.5,0.8,2.8,2.4,2.8h4.5l0.7-3.2C21.4,37.6,20.4,38.1,19.4,38z"
          />
          <path
            d="M24.5,27.5c-0.8,0.7-1.3,1.8-1.3,2.9c0,4,5.2,3.6,5.2,6.2c-0.1,0.9-0.8,1.6-1.7,1.5h-0.1
      C25.3,38,24,37.5,23,36.6c0,0.9,0.2,1.8,0.6,2.6c0.5,0.6,2.2,1,3.3,1c2.9,0,4.7-1.5,4.7-4.2c0-1.1-0.5-2.1-1.3-2.8
      c-0.7-0.6-1.5-1.1-2.3-1.5c-0.6-0.3-1.6-0.9-1.6-1.8c0-0.7,0.6-1.3,1.3-1.3c0.1,0,0.2,0,0.2,0c0.9,0,1.7,0.4,2.4,0.9v-2.3
      c-0.9-0.4-1.9-0.6-2.9-0.6C26.4,26.5,25.4,26.8,24.5,27.5z"
          />
          <path
            d="M32,26.9l-0.5,2.2c0.6-0.1,1.3-0.2,2-0.2h1.3V37c0,1,0,2.3-0.7,2.8h4.7C38.1,39,37.8,38,38,37v-8.1h1.4
      c0.6,0,1.3,0,1.9,0.1l-0.4-2.2L32,26.9z"
          />
          <path
            d="M50.5,37c-0.8,0.7-1.9,1.1-3,1c-0.6,0-1.2-0.1-1.8-0.3V34h3l-0.4-2h-2.6v-3.1H48c0.7,0,1.9,0.1,1.9,0.1
      l-0.5-2.2h-7.6c0.8,0.6,0.7,1.8,0.7,2.8v10.2H48C49.8,39.9,50.5,37,50.5,37L50.5,37z M41.7,26.9L41.7,26.9L41.7,26.9L41.7,26.9z"
          />
          <path
            d="M58.3,29.9c-0.8-2.8-3.6-3.3-5.2-3.1c0.8,0.9,0.2,2.6,0.1,3.1l-2.1,7.6c-0.3,1.1-0.9,2.1-1.7,3
      c1.3-0.2,2.5-0.9,3.4-1.9c1-1.3,1.9-2.5,4-2.9c0,0,0.8,2.6,0.8,3c0,0.5-0.2,0.9-0.6,1.2h4.8c-0.7-0.8-1.2-1.8-1.4-2.9
      C60.4,37,58.7,31.5,58.3,29.9z M54,34.6l1.3-4.6l0,0l1.1,4C55.6,34,54.8,34.2,54,34.6z"
          />
        </g>
      </svg>
    </SquareLink>
  );
}

Nestea.propTypes = {
  fadeInStyle: PropTypes.shape({
    transform: PropTypes.object,
    opacity: PropTypes.object,
  }).isRequired,
};

export default Nestea;
