/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Header from '../components/header';
import Content, { ContentGrid } from '../components/content';
import Logos from '../components/logos';
import StaggerTriad from '../components/staggerTriad';
import Space from '../components/space';
import SectionTitle from '../components/sectionTitle';
import AdVictorem from '../components/logos/adVictorem';
import Footer from '../components/footer';
import avFlagVideo from '../../static/video/av-flag.mp4';
import './index.scss';

const titles = ['Shifting brands from', 'giving up to moving', 'forward.'];

const IndexPage = () => {
  return (
    <>
      <Header titles={titles} />
      <Content>
        <ContentGrid>
          <StaggerTriad autoPlay>
            <Logos.Lakers />
            <Logos.DisneyPlus />
            <Logos.Motiv />
          </StaggerTriad>
          <StaggerTriad>
            <Logos.Rams />
            <Logos.AcHotels />
            <Logos.Nestea />
          </StaggerTriad>
          <StaggerTriad>
            <Logos.ESPN />
            <Logos.LAFC />
            <Logos.FOX />
          </StaggerTriad>
        </ContentGrid>
      </Content>
      <Space />
      <Content>
        <SectionTitle
          viewBox="0 0 1399.66 132.6"
          path="M1397.7 5.6h-58.5L1312 48.3l-27-42.7h-58.7l60.2 83V127h51V88.6l60.2-83zM1264.8 127V91.3h-84.5V5.6h-51V127h135.5zM1124.9 5.6H979V42h47.4v85h51V42h47.4V5.6h.1zm-198.2 0v63.6h-1L875.1 5.6h-58.6V127h47.9V62.7h1l51.2 64.3h58V5.6h-47.9zM723 36.5h86.5V5.6H672V127h138.5V96.5H723V79.9h82.1V51.8H723V36.5zM597.9 62.9h-38.1V42.1h38.1c9.7 0 12.9 3.4 12.9 10.5s-3.4 10.3-12.9 10.3zm44.9 19.5v-1.7c15.6-4.1 24.8-13.4 24.8-33.3 0-26.5-13.1-41.8-54.1-41.8H508.8V127h51V92.6h34.5L614 127h56.3l-27.5-44.6zM434.7 62.9h-38.1V42.1h38.1c9.7 0 12.9 3.4 12.9 10.5s-3.4 10.3-12.9 10.3zm44.8 19.5v-1.7c15.6-4.1 24.8-13.4 24.8-33.3 0-26.5-13.1-41.8-54.1-41.8H345.6V127h51V92.6h34.5l19.7 34.3h56.3l-27.6-44.5zM286.9 5.6v68.2c0 15.6-10.4 20.2-27.5 20.2-17.2 0-27.5-4.6-27.5-20.2V5.6h-51v68.3c0 44.5 29.8 57.5 78.5 57.5s78.5-12.9 78.5-57.5V5.6h-51zm-170.6 49h58.8C174.2 20.2 147.4 1 88.5 1S1 21.9 1 66.3s28.7 65.3 87.5 65.3 86-19.2 86.9-56.4h-58.8c-1 10.7-6.5 19-28.1 19s-31.8-10-31.8-27.9c0-17.8 10.2-27.9 31.8-27.9s26.9 8.3 27.8 16.2z"
        />
        <div className="video-section">
          <video autoPlay loop playsInline muted>
            <source src={avFlagVideo} type="video/mp4" />
          </video>
          <p>
            HELPING
            <br />
            BRANDS WIN.
          </p>
          <div className="video-description">
            <a target="_blank" rel="noopener noreferrer" href="https://advictorem.agency/">
              VISIT AD VICTOREM
            </a>
            <AdVictorem />
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default IndexPage;
