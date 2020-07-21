/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import { Power3 } from '../../lib/gsap';
import useLogos from './useLogos';
import useTimeline from '../../hooks/animation';
import SquareLink from '../squareLink';

const TITLE = 'LAFC';
const COLOR = '#222';
const LINK = 'https://advictorem.agency/case-studies/lafc';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "lafc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function LAFC({ fadeInStyle }) {
  const { cover } = useStaticQuery(query);
  const tl = useTimeline({ paused: true });
  const svg = useRef();
  const secondLetter = useRef();
  const firstLetter = useRef();
  const topLine = useRef();
  const stroke = useRef();
  const bottomLine = useRef();
  const { globalColor, onMouseEnter, onMouseLeave } = useLogos(COLOR, tl, () => {
    tl.to(svg.current, 0.4, {
      opacity: 0,
      scale: 0.9,
      ease: Power3.easeIn,
    });
    tl.set(svg.current, {
      opacity: 1,
      scale: 1,
    });
    tl.set([firstLetter.current, secondLetter.current], {
      transformOrigin: 'center',
      scale: 0.7,
      opacity: 0,
    });
    tl.set(topLine.current, {
      transformOrigin: 'center',
      y: -20,
      opacity: 0,
    });
    tl.set(bottomLine.current, {
      transformOrigin: 'center',
      y: 20,
      opacity: 0,
    });
    tl.set(stroke.current, {
      transformOrigin: 'center',
      scale: 1.3,
      opacity: 0,
    });

    tl.staggerTo(
      [firstLetter.current, secondLetter.current],
      1,
      {
        scale: 1,
        opacity: 1,
        ease: Power3.easeInOut,
      },
      0.15,
    );
    tl.to(topLine.current, 1, {
      y: 0,
      opacity: 1,
      ease: Power3.easeOut,
    });

    tl.to(
      bottomLine.current,
      1,
      {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      },
      '-=1',
    );

    tl.to(
      stroke.current,
      1,
      {
        scale: 1,
        opacity: 1,
        ease: Power3.easeOut,
      },
      '-=1',
    );
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
      <svg ref={svg} viewBox="-100 -100 500 612.7" width="45%" fill="currentColor">
        <path
          ref={secondLetter}
          d="M172.2 136.6c-2.7 3.4-5.1 7-7.4 10.8l21 23.3c7-13.9 17.3-24.9 30.9-32.8v78.3L106.1 93.8v28.7c25.5 22.8 67.8 63.8 93.8 87.1v1.5L114.7 136v18.3c25.9 19.6 58.9 46.1 85.2 66v1.5l-76.5-57.2v17.1c25.4 15.3 52 33.1 76.5 47.8v1.7l-67.8-40.6v13.8c29.9 15.1 54.9 28.8 84.5 43.6v36.3h29V94.8c-32.3 3.4-56.8 19.6-73.4 41.8zm-26.3 85.7c0 12.2 1.1 23.1 2.4 31.8 1.2 6.4 4.1 20.4 8.1 29.9h29.1s-7.8-21.7-10.1-47.6l-1.2-.6c-9-4.2-18.2-8.6-28.3-13.5z"
        />
        <path ref={firstLetter} d="M137.7 254.1h-55V115.3l-29-21.4V284h92.1c-3.9-9.6-6.8-23.5-8.1-29.9z" />
        <path
          ref={topLine}
          d="M68.1 65.4h-8.8v-16h-5.5V70h14.3v-4.6zm12.2 4.9c5.9 0 11.1-4.4 11.1-10.6 0-6.2-5.1-10.5-11.1-10.5-5.9 0-11.1 4.3-11.1 10.5 0 6.3 5.1 10.6 11.1 10.6zm0-16.3c3.5 0 5.4 2.5 5.4 5.8 0 3.2-2 5.8-5.4 5.8-3.5 0-5.4-2.5-5.4-5.8s1.9-5.8 5.4-5.8zm86.8 16.3c4.6 0 7.1-1.3 9-2.8v-8.6h-9v4.2h4.1v1.8c-.9.4-2 .8-4 .8-3.6 0-5.5-2.7-5.5-5.9s1.8-5.8 5.2-5.8c2.1 0 3.5.9 4.5 2.2l3.8-3.3c-1.8-2.3-4.6-3.7-8.3-3.7-5.9 0-11 4.3-11 10.5s5.2 10.6 11.2 10.6zm26.6-4.9h-9.4v-2.2h7.5v-4.4h-7.5V54h8.9v-4.6h-14.5V70h14.9v-4.6zm17 0h-8.8v-16h-5.5V70h14.3v-4.6zm-91.9 2.9h7.8l.8 1.8h5.7l-10-21c-.1-.2-.3-.2-.4 0l-10 21h5.4l.7-1.8zm3.8-8.9l2.1 4.8h-4.2l2.1-4.8zm17.5.4L153 70.4c.3.3.4.2.4-.1V49.5h-5.2v10.3l-12.9-10.7c-.3-.3-.4-.1-.4.1v20.9h5.2V59.8zm-39.8 10.6c5.5 0 7.8-2.7 7.8-6.5 0-2.9-1.4-4.9-5.5-6.2l-2.7-.9c-1-.3-1.5-.7-1.5-1.5s.7-1.4 2-1.4c1.6 0 2.5.6 3.4 1.5l3.2-3.3c-1.2-1.4-3.2-2.7-6.8-2.7-3.7 0-7 2.1-7 6.1 0 3.4 2.1 5.2 5.1 6.2l2.4.8c1.4.5 2 .9 2 1.8 0 1.2-1 1.6-2.6 1.6-2.1 0-3.3-1-4.3-2.2l-4 3c1.2 1.6 3.8 3.7 8.5 3.7zm-8.6-3.8zm136.4-1.2h-9.4v-2.2h7.5v-4.4h-7.5V54h8.9v-4.6h-14.5V70H228v-4.6zm9.5 5c5.5 0 7.8-2.7 7.8-6.5 0-2.9-1.4-4.9-5.5-6.2l-2.7-.9c-1-.3-1.5-.7-1.5-1.5s.7-1.4 2-1.4c1.6 0 2.5.6 3.4 1.5l3.2-3.3c-1.2-1.4-3.2-2.7-6.8-2.7-3.7 0-7 2.1-7 6.1 0 3.4 2.1 5.2 5.1 6.2l2.4.8c1.4.5 2 .9 2 1.8 0 1.2-1 1.6-2.6 1.6-2.1 0-3.3-1-4.3-2.2l-4 3c1.3 1.6 3.9 3.7 8.5 3.7zm-8.5-3.8z"
        />
        <path
          ref={stroke}
          d="M0 0v300.4c.1 48.4 7.4 70.6 75.7 82.1 3.2.5 6.2 1 9.1 1.5 20.5 3.2 39.8 6.3 56.5 21.3l8.3 7.5 8.3-7.5c16.7-15 36-18 56.5-21.3l1.2-.2c2.6-.4 5.2-.8 7.9-1.3 37.4-6.3 47.3-12.5 59.1-23 15.2-13.4 16.5-40.7 16.6-59.1V0H0zm221.5 370.2c-3.1.5-6.1 1-9 1.5-21.4 3.4-43.4 6.9-62.9 24.3-19.4-17.4-41.5-20.9-62.9-24.3-2.9-.5-5.9-.9-9-1.5-65.4-11-65.3-30.2-65.3-69.8V12.5h274.2l.1 288c-.1 39.5.2 58.7-65.2 69.7z"
        />
        <path
          ref={bottomLine}
          d="M53.8 328.6h4.5v-5.4h6.2v-3.8h-6.2v-3.9h7v-3.8H53.8v16.9zm21.9-17.2c-4.9 0-9.1 3.6-9.1 8.7s4.2 8.7 9.1 8.7c4.9 0 9.1-3.6 9.1-8.7s-4.2-8.7-9.1-8.7zm0 13.5c-2.8 0-4.5-2.1-4.5-4.8 0-2.7 1.6-4.7 4.5-4.7 2.8 0 4.5 2.1 4.5 4.7-.1 2.7-1.7 4.8-4.5 4.8zm55.1-5.8c1.1-.5 1.9-1.4 1.9-3.3 0-2.6-2.2-4.1-5.6-4.1h-6.9v17h7.2c4.2 0 6.7-1.8 6.7-5.1.1-2.7-1.5-4-3.3-4.5zm-6.2-3.9h2.2c1 0 1.4.6 1.4 1.4 0 .8-.4 1.3-1.4 1.3h-2.2v-2.7zm2.8 9.8h-2.7v-3.8h2.7c1.7 0 2.3.7 2.3 1.9s-.6 1.9-2.3 1.9zm-32.2-13.6c-4.9 0-9.1 3.6-9.1 8.7s4.2 8.7 9.1 8.7c4.9 0 9.1-3.6 9.1-8.7s-4.2-8.7-9.1-8.7zm0 13.5c-2.8 0-4.5-2.1-4.5-4.8 0-2.7 1.6-4.7 4.5-4.7s4.5 2.1 4.5 4.7c0 2.7-1.7 4.8-4.5 4.8zm9.5-9.4h4.5v13.2h4.5v-13.2h4.5v-3.8h-13.5v3.8zm137.4 3.6c1.1-.5 1.9-1.4 1.9-3.3 0-2.6-2.2-4.1-5.6-4.1h-6.9v17h7.2c4.2 0 6.7-1.8 6.7-5.1.1-2.7-1.5-4-3.3-4.5zm-6.2-3.9h2.2c1 0 1.4.6 1.4 1.4 0 .8-.4 1.3-1.4 1.3h-2.2v-2.7zm2.7 9.8h-2.7v-3.8h2.7c1.7 0 2.3.7 2.3 1.9s-.5 1.9-2.3 1.9zm-33.1-13.4H201v17h11.8v-3.8h-7.2v-13.2zm-13.8 13.3c-2.6 0-4.2-2.1-4.2-4.8 0-2.7 1.5-4.7 4-4.7 2.1 0 3.2 1 3.8 2l3.4-2.3c-1.4-2.1-3.7-3.6-7.3-3.6-4.5 0-8.6 3.6-8.6 8.7s4.1 8.7 8.8 8.7c3.4 0 5.8-1.2 7.5-4l-3.5-2.2c-.6 1.2-1.7 2.2-3.9 2.2zm32.5-2.9c0 1.9-.9 3-2.8 3s-2.8-1.1-2.8-3v-10.4H214V322c0 4.6 3.1 6.8 7.4 6.8 4.2 0 7.4-2.2 7.4-6.8v-10.4h-4.5V322zm-81.4-10.7l-8.3 17.3h4.4l.6-1.4h6.4l.6 1.4h4.7l-8.2-17.3c0-.1-.1-.1-.2 0zm-1.7 12.5l1.7-3.9 1.7 3.9h-3.4zm16.4-12.2H153v17h11.8v-3.8h-7.2v-13.2zm13.8 0h-4.5v17h11.8v-3.8h-7.2v-13.2z"
        />
      </svg>
    </SquareLink>
  );
}

LAFC.propTypes = {
  fadeInStyle: PropTypes.shape({
    transform: PropTypes.object,
    opacity: PropTypes.object,
  }).isRequired,
};

export default LAFC;
