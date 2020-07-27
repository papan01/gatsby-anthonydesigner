import React, { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, TweenMax, Power3, Sine } from '../../lib/gsap';
import './adVictorem.scss';

const paths = {
  traingle01: 'M169.56,28.94l-68,136.68L32.24,28.94H169.56z',
  triangle02: 'M169.6,28.9L84.8,199.4L0,28.9L169.6,28.9z',
  flag01: 'M219.72,16.55c-46.97,61.93-75.97-35.18-134.5,12.59l40.27,79.01 C146.84,59.29,216.17,102.63,219.72,16.55z',
  flag02: 'M219.72,16.55c-77.71,1.62-21.19,72.3-94.23,91.6L85.22,29.14 C137.3,40.58,147.99-31.15,219.72,16.55z',
  flag03: 'M211,38.1c-77.7,1.6-12.5,50.7-85.5,70l-40.3-79C137.2,54.1,133.2-12.4,211,38.1z',
};

const ColorTriangles = {
  init({ board, colorTrianglesWrapper, colorTriangles, logo }) {
    this.board = board;
    this.colorTrianglesWrapper = colorTrianglesWrapper;
    this.colorTriangles = colorTriangles;
    this.logo = logo;

    this.logo.current.style.display = 'none';
    this.colorTrianglesWrapper.current.style.display = 'block';

    this.reactToMousePosition(this.e);

    this.active = true;
  },
  reactToMousePosition(e) {
    if (!this.active) return;

    const boardBCR = this.board.current.getBoundingClientRect();
    const x = (e.clientX - boardBCR.left - boardBCR.width / 2) / boardBCR.width / 2;
    const y = (e.clientY - boardBCR.top - boardBCR.height / 2) / boardBCR.height / 2;
    TweenMax.to(this.colorTriangles.current[1], 0.5, {
      x: -100 * x,
      y: -100 * y,
      ease: Power3.easeOut,
    });
    TweenMax.to(this.colorTriangles.current[2], 0.5, {
      x: -200 * x,
      y: -200 * y,
      ease: Power3.easeOut,
    });
  },
  destroy() {
    this.active = false;

    const foldTriangles = new Promise(resolve => {
      TweenMax.to(this.colorTriangles.current, 0.5, {
        x: 0,
        y: 0,
        ease: Power3.easeOut,
        onComplete: resolve,
      });
    });

    foldTriangles.then(() => {
      this.colorTrianglesWrapper.current.style.display = 'none';
      this.logo.current.style.display = 'block';
    });

    return foldTriangles;
  },
  passEvent(e) {
    this.e = e;
  },
};

const ColorTriangle = forwardRef(({ fill }, ref) => (
  <svg ref={ref} fill={fill} viewBox="0 0 219.72 199.37" className="color-triangle">
    <path d="M169.6,28.9L84.8,199.4L0,28.9L169.6,28.9z" />
  </svg>
));
ColorTriangle.displayName = 'ColorTriangle';
ColorTriangle.propTypes = {
  fill: PropTypes.string.isRequired,
};

function AdVictorem() {
  const isActive = useRef(false);
  const board = useRef();
  const colorTrianglesWrapper = useRef();
  const colorTriangles = useRef([]);
  const logo = useRef();
  const flag = useRef();
  const waveTL = useRef();
  const makeTriangleTL = useRef();

  useEffect(() => {
    const wavingTL = new TimelineMax({ repeat: -1 })
      .to(flag.current, 2, { morphSVG: paths.flag02, ease: Sine.easeInOut })
      .to(flag.current, 2, { morphSVG: paths.flag01, ease: Sine.easeInOut })
      .to(flag.current, 2, { morphSVG: paths.flag03, ease: Sine.easeInOut })
      .to(flag.current, 2, { morphSVG: paths.flag01, ease: Sine.easeInOut });

    waveTL.current = new TimelineMax({ paused: true })
      .to(flag.current, 0.5, { morphSVG: paths.flag01, ease: Power3.easeOut })
      .add(wavingTL);

    waveTL.current.play(1);

    makeTriangleTL.current = new TimelineMax({
      paused: true,
      onComplete: () =>
        ColorTriangles.init({
          board,
          colorTrianglesWrapper,
          colorTriangles,
          logo,
        }),
    })
      .to(flag.current, 0.5, {
        morphSVG: paths.traingle01,
        ease: Power3.easeOut,
      })
      .to(flag.current, 0, { morphSVG: paths.triangle02 });
    return () => {
      if (waveTL.current) waveTL.current.kill();
    };
  }, []);

  const showColorTriangles = e => {
    if (isActive.current) return;

    isActive.current = true;
    waveTL.current.invalidate();
    waveTL.current.kill();
    makeTriangleTL.current.play(0);
    e.persist();
    ColorTriangles.passEvent(e);
  };

  const hideColorTriangles = () => {
    if (!isActive.current) return;

    ColorTriangles.destroy().then(() => {
      makeTriangleTL.current.invalidate();
      makeTriangleTL.current.kill();
      waveTL.current.restart();
      isActive.current = false;
    });
  };

  return (
    <div className="ad-victorem" onMouseMove={showColorTriangles} onMouseLeave={hideColorTriangles}>
      <div className="ad-board" onMouseMove={e => ColorTriangles.reactToMousePosition(e)} ref={board} />
      <div className="color-triangles-wrapper" ref={colorTrianglesWrapper}>
        <ColorTriangle fill="#ff3700" ref={ref => colorTriangles.current.push(ref)} />
        <ColorTriangle fill="rgba(255, 255, 255, 0.9)" ref={ref => colorTriangles.current.push(ref)} />
        <ColorTriangle fill="#00fc5a" ref={ref => colorTriangles.current.push(ref)} />
      </div>
      <svg viewBox="0 0 219.72 199.37" className="logo">
        <g ref={logo}>
          <path d="M103.26,162.21l-18.48,37.16L0,28.94h35.67L103.26,162.21z" />
          <path
            ref={flag}
            d="M219.72,16.55c-46.97,61.93-75.97-35.18-134.5,12.59l40.27,79.01 C146.84,59.29,216.17,102.63,219.72,16.55z"
          />
        </g>
      </svg>
    </div>
  );
}

export default AdVictorem;
