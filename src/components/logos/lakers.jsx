import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Square from '../square';

const query = graphql`
  query {
    cover: file(relativePath: { eq: "los-angeles-lakers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function Lakers() {
  const { cover } = useStaticQuery(query);
  return <Square cover={cover} fadeInStyle={{ transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 1 }} />;
}

Lakers.propTypes = {};

export default Lakers;
