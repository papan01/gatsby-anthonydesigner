import React from 'react';
import Layout from '../layout';
import Header from '../components/header';
import Content from '../components/content';
import Logos from '../components/logos';
import StaggerTriad from '../components/staggerTriad';

const titles = ['Shifting brands from', 'giving up to moving', 'forward.'];

const IndexPage = () => {
  return (
    <Layout>
      <Header titles={titles} />
      <Content>
        <StaggerTriad autoPlay>
          <Logos.Lakers />
          <Logos.DisneyPlus />
          <Logos.Motiv />
        </StaggerTriad>
        <StaggerTriad>
          <Logos.Rams />
          <Logos.AcHotels />
          <Logos.Motiv />
        </StaggerTriad>
        <StaggerTriad>
          <Logos.ESPN />
          <Logos.LAFC />
          <Logos.Nestea />
        </StaggerTriad>
      </Content>
    </Layout>
  );
};

export default IndexPage;
