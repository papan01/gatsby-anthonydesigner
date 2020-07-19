import React from 'react';
import { useTrail } from 'react-spring';
import * as easings from 'd3-ease';
import Layout from '../layout';
import Header from '../components/header';
import Content from '../components/content';
import Logos from '../components/logos';
import { CONTENT_LOGOS_DELAY } from '../constants';

const titles = ['Shifting brands from', 'giving up to moving', 'forward.'];

const IndexPage = () => {
  const [trail] = useTrail(Logos.length, () => ({
    from: { transform: 'matrix(1, 0, 0, 1, 0, 30)', opacity: 0 },
    to: { transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 1 },
    delay: CONTENT_LOGOS_DELAY,
    config: { easing: easings.easeCubicInOut },
  }));

  return (
    <Layout>
      <Header titles={titles} />
      <Content>
        {trail.map((props, index) => {
          const Logo = Logos[index];
          return <Logo key={Logo.name} fadeInStyle={props} />;
        })}
      </Content>
    </Layout>
  );
};

export default IndexPage;
