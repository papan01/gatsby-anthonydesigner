import React from 'react';
import Layout from '../layout';
import Header from '../components/header';
import Content from '../components/content';

const titles = ['Shifting brands from', 'giving up to moving', 'forward.'];

const IndexPage = () => (
  <Layout>
    <Header titles={titles} />
    <Content />
  </Layout>
);

export default IndexPage;
