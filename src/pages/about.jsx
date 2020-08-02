import React from 'react';
import AnthonyImg from '../components/anthonyImg';
import { AboutHeader } from '../components/header';
import Content, { ContentGrid } from '../components/content';
import HoverImg from '../components/hoverImg';
import Jordan from '../../static/video/jordan.mp4';
import Payton from '../../static/video/payton.mp4';
import './about.scss';

const titles = ['competition', 'and creativity', 'runs hard in', 'his veins.'];

function About() {
  return (
    <div className="about">
      <AnthonyImg />
      <AboutHeader titles={titles} />
      <Content>
        <ContentGrid styleClassName="content-grid-2">
          <div>
            <p>
              Given that Anthony grew up in Chicago rooting for sports legends like
              <strong>
                <HoverImg video src={Jordan} text=" MICHAEL JORDAN " />
              </strong>
              and
              <strong>
                <HoverImg video src={Payton} text=" WALTER PAYTON " />
              </strong>
              that’s no surprise.
            </p>
          </div>
        </ContentGrid>
      </Content>
    </div>
  );
}

export default About;
