/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import { Power3 } from '../../lib/gsap';
import useLogos from './useLogos';
import useTimeline from '../../hooks/animation';
import SquareLink from '../squareLink';

const TITLE = 'Rams';
const COLOR = '#001865';
const LINK = 'https://advictorem.agency/case-studies/rams';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "rams.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function Rams({ fadeInStyle }) {
  const { cover } = useStaticQuery(query);
  const tl = useTimeline({ paused: true });
  const path = useRef();
  const { globalColor, onMouseEnter, onMouseLeave } = useLogos(COLOR, tl, () => {
    tl.from(path.current, 1, {
      drawSVG: '0%',
      ease: Power3.easeInOut,
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
      <svg viewBox="0 0 94 67.2" width="45%">
        <path
          fill="currentColor"
          d="M88.2 16.7C81.6.6 63.4 3.8 63.4 3.8h.1l-.7.1c-4.5.7-8.7 2.9-11.8 6.3C57.7 5 67.7 4.4 74.3 7.1c6.9 2.7 11.8 9 12.7 16.4 0 2.6-.6 5.1-1.7 7.4-.6 1.4-1.6 2.5-2.7 3.5-.6.5-1.3.7-2 .8h-.3c-.1 0-.2 0-.2-.1-.5-.2-.7-.8-1.8-2.4-.5-.7-1.1-1.4-1.7-2.1l.3-.3.1-.1c.1-.1.2-.2.3-.4.3-.4.5-.9.7-1.3v-.1c.1-.2.1-.3.2-.5 1-4.4-.7-9-4.3-11.8-4.4-3.6-9.2-3.9-13.1-2.4-6.5 2.6-10.5 10.5-5.8 16.9 1.7 2.7 5.3 3.5 8 1.8.1-.1.2-.1.3-.2 2.1-1.6 3.6-6.7-1.7-9.4 4.2-.4 9.4 4.7 6.9 11.2-.2.5-.4.9-.7 1.3-3.7 6.2-13.7 5.5-18.5-.2-4.4-5.4-5.7-12.8-3.2-19.4.2-.4.3-.9.5-1.4a75.79 75.79 0 0 0-32 16.1c27 5.6 36.8 21.9 36.8 21.9.9-.8 1.5-1.8 1.8-3a7.88 7.88 0 0 1-1-6c.3 1.7 1 3.3 1.9 4.7.7.8 1.4 1.5 2.1 2.2l.1.1c1.2 1 2.2 2 3.2 3.2 1.5 2.6-.1 5.6-.1 5.6l8.2 4.5c1.8-.5 6.1-1.5 7.3-2 2.5-4.4 4.2-9.3 5.1-14.3l2.1-2c.8-2.2-.6-7.2-.6-7.2l.5-.2c.4-.1.9-.3 1.3-.5 4.9-2.6 9.1-10.6 4.9-20.7zM73.7 42c.1-.6.2-1.1.1-1.7.6.8 1.1 1.7 1.3 2.7H75c-.8 0-1.5.7-1.5 1.5S74.2 46 75 46c-.1.2-.1.4-.2.6-1.4 0-2.5-1.1-2.5-2.4 0-.9.5-1.7 1.4-2.2zm1.5 2.7c0 .2 0 .4-.1.5v.2c-.4.1-.8-.1-1-.5.3.2.8.2 1.1-.2zm3.3.9c-.8 5-2.4 9.9-4.7 14.5-.7.2-1.4.3-2.1.3 0 0 1.7-1.9 1-3.7-.2-.4-.6-.7-1-.7-.3 0-.6.1-.8.4-.5.6-.5 1.4-.1 2.1l.6-.6c.1.3.1.7 0 1.1-.6 1.4-1.8 2.4-3.3 2.7-.4-.2-.8-.4-1.1-.6.2-.6.6-1.4.9-2.3.9-2.8.5-4.7-.4-5.9-1.2.6-2.3 1.2-3.5 1.8.7 1.4 1.8 2.6 1 5.4 0 .1-2.9-1.5-2.9-1.5.4-1.4.5-2.9.2-4.3-.1-.6-.4-1.2-.7-1.7 1.6-1.5 3.4-2.8 5.3-3.8 3.2 1.1 6 3.2 7.8 6.1 1.3-3 2-6.2 1.9-9.5l1.3-1.2c.6-7-4.2-12.9-4.2-12.9s6.5 5.2 6.3 13l-1.5 1.3z"
        />
        <path
          opacity=".5"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={0.8}
          d="M2.6 33.9S19.8 17 47.4 12C59.4-2.1 76.3-.3 85 8c8.5 8.1 10.9 25.1-1.2 31.1 0 0 1.1 3.9.2 7l-2 2c-1.1 5-3 9.9-5.6 14.8l-8.9 2.5-10.3-5.8s2.5-3.8.5-5.6l-3.1-2.8s-1.4 2.3-3.5 3.7c-5.4-9.2-24.5-21.3-48.5-21z"
        />
        <path
          ref={path}
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={0.8}
          d="M2.6 33.9S19.8 17 47.4 12C59.4-2.1 76.3-.3 85 8c8.5 8.1 10.9 25.1-1.2 31.1 0 0 1.1 3.9.2 7l-2 2c-1.1 5-3 9.9-5.6 14.8l-8.9 2.5-10.3-5.8s2.5-3.8.5-5.6l-3.1-2.8s-1.4 2.3-3.5 3.7c-5.4-9.2-24.5-21.3-48.5-21z"
        />
      </svg>
    </SquareLink>
  );
}

Rams.propTypes = {
  fadeInStyle: PropTypes.shape({
    transform: PropTypes.object,
    opacity: PropTypes.object,
  }).isRequired,
};

export default Rams;
