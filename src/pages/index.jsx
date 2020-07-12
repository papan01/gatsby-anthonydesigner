import React from 'react';
import Layout from '../layout';
import Header from '../components/header';
import Content from '../components/content';
import Lakers from '../components/logos/lakers';

const titles = ['Shifting brands from', 'giving up to moving', 'forward.'];

const IndexPage = () => (
  <Layout>
    <Header titles={titles} />
    <Content>
      <Lakers />
    </Content>
  </Layout>
);

export default IndexPage;
