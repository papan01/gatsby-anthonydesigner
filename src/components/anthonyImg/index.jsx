import React, { useContext, useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import useTimeline from '../../hooks/animation';
import { Power4 } from '../../lib/gsap';
import { ScrollContext } from '../scroller';
import './style.scss';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "aw-about-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function AnthonyImg() {
  const { cover } = useStaticQuery(query);
  const [shouldBeMuted, setShouldBeMuted] = useState(false);
  const scrollContext = useContext(ScrollContext);
  const img = useRef();
  const tl = useTimeline({ delay: 0.75 });

  useEffect(() => {
    if (scrollContext.scrollValue > 100) {
      setShouldBeMuted(true);
    } else {
      setShouldBeMuted(false);
    }
    tl.from(img.current, 2, { opacity: 0, ease: Power4.easeOut });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="anthony-img-container" style={{ opacity: shouldBeMuted ? 0.1 : 1 }}>
      <div ref={img} className="anthony-img-inner">
        <Img fluid={{ ...cover.childImageSharp.fluid }} className="img" />
      </div>
    </div>
  );
}

export default AnthonyImg;
