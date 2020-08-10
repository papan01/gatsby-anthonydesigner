import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AnthonyImg from '../components/anthonyImg';
import { AboutHeader } from '../components/header';
import Content, { ContentGrid } from '../components/content';
import SocialLinks from '../components/socialLinks';
import HoverImg from '../components/hoverImg';
import Space from '../components/space';
import Footer from '../components/footer';
import SectionTitle from '../components/sectionTitle';
import AutoScale from '../components/animation';

import Jordan from '../../static/video/jordan.mp4';
import Payton from '../../static/video/payton.mp4';
import Webby from '../../static/video/webby.mp4';
import Usc from '../../static/video/usc.mp4';
import resumePdf from '../../static/anthony-wiktor-resume.pdf';

import aigaLogo from '../../static/affiliations/aigala.svg';
import tofcLogo from '../../static/affiliations/tofc.svg';
import imcLogo from '../../static/affiliations/imc.svg';
import designedLogo from '../../static/affiliations/designed.svg';
import uscLogo from '../../static/affiliations/usc.svg';

import FirstCentury from '../../static/clients/1stCentury.svg';
import Onestdibs from '../../static/clients/1stdibs.svg';
import abc from '../../static/clients/abc.svg';
import AChotels from '../../static/clients/AChotels.svg';
import adonit from '../../static/clients/adonit.svg';
import AIGA from '../../static/clients/AIGA.svg';
import amc from '../../static/clients/amc.svg';
import azubu from '../../static/clients/azubu.svg';
import BatteryWharf from '../../static/clients/BatteryWharf.svg';
import berggruen from '../../static/clients/berggruen.svg';
import bravo from '../../static/clients/bravo.svg';
import butterfinger from '../../static/clients/butterfinger.svg';
import calpoly from '../../static/clients/calpoly.svg';
import cbsinteractive from '../../static/clients/cbsinteractive.svg';
import chadburry from '../../static/clients/chadburry.svg';
import coffeemate from '../../static/clients/coffeemate.svg';
import coldwellbanker from '../../static/clients/coldwellbanker.svg';
import dignityhealth from '../../static/clients/dignityhealth.svg';
import directtv from '../../static/clients/directtv.svg';
import equityoffice from '../../static/clients/equityoffice.svg';
import espn from '../../static/clients/espn.svg';
import fox from '../../static/clients/fox.svg';
import gatorade from '../../static/clients/gatorade.svg';
import hampton from '../../static/clients/hampton.svg';
import hollywoodmedia from '../../static/clients/hollywoodmedia.svg';
import hotpockets from '../../static/clients/hotpockets.svg';
import instantly from '../../static/clients/instantly.svg';
import itv from '../../static/clients/itv.svg';
import kraft from '../../static/clients/kraft.svg';
import lacare from '../../static/clients/lacare.svg';
import lionsgate from '../../static/clients/lionsgate.svg';
import logix from '../../static/clients/logix.svg';
import metro from '../../static/clients/metro.svg';
import motiv from '../../static/clients/motiv.svg';
import msnbc from '../../static/clients/msnbc.svg';
import nestle from '../../static/clients/nestle.svg';
import pressbros from '../../static/clients/pressbros.svg';
import rams from '../../static/clients/rams.svg';
import ronhami from '../../static/clients/ronhami.svg';
import santamonicaplaza from '../../static/clients/santamonicaplaza.svg';
import sapphire from '../../static/clients/sapphire.svg';
import smokeybones from '../../static/clients/smokeybones.svg';
import sothebys from '../../static/clients/sothebys.svg';
import tennischannel from '../../static/clients/tennischannel.svg';
import tmz from '../../static/clients/tmz.svg';
import toyota from '../../static/clients/toyota.svg';
import uw from '../../static/clients/uw.svg';
import voskos from '../../static/clients/voskos.svg';
import westfield from '../../static/clients/westfield.svg';
import lafc from '../../static/clients/lafc.svg';
import whotels from '../../static/clients/whotels.svg';
import jphro from '../../static/clients/jphro.svg';

import './about.scss';

const clients = [
  FirstCentury,
  Onestdibs,
  abc,
  AChotels,
  adonit,
  AIGA,
  amc,
  azubu,
  BatteryWharf,
  berggruen,
  bravo,
  butterfinger,
  calpoly,
  cbsinteractive,
  chadburry,
  coffeemate,
  coldwellbanker,
  dignityhealth,
  directtv,
  equityoffice,
  espn,
  fox,
  gatorade,
  hampton,
  hollywoodmedia,
  hotpockets,
  instantly,
  itv,
  kraft,
  lacare,
  lionsgate,
  logix,
  metro,
  motiv,
  msnbc,
  nestle,
  pressbros,
  rams,
  ronhami,
  santamonicaplaza,
  sapphire,
  smokeybones,
  sothebys,
  tennischannel,
  tmz,
  toyota,
  uw,
  voskos,
  westfield,
  lafc,
  whotels,
  jphro,
];

const titles = ['competition', 'and creativity', 'runs hard in', 'his veins.'];

const query = graphql`
  query {
    hot100: file(relativePath: { eq: "hot-100.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    webby: file(relativePath: { eq: "webby.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    how: file(relativePath: { eq: "how.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    communicator: file(relativePath: { eq: "communicator.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tellys: file(relativePath: { eq: "tellys.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    w3: file(relativePath: { eq: "w3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aaa: file(relativePath: { eq: "aaa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hermes: file(relativePath: { eq: "hermes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dotcomm: file(relativePath: { eq: "dotcomm.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function About() {
  const { hot100, webby, communicator, tellys, how, w3, aaa, hermes, dotcomm } = useStaticQuery(query);
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
            <Space styleClassName="space-20-40" />
            <p>
              Anthony brings that competitive spirit to his branding and design work, leading to shelves full of awards,
              and being listed in Web Designer Magazine&apos;s
              <strong>
                <HoverImg src={hot100} text=' "HOT 100" ' />
              </strong>
              list twice.
            </p>
            <Space styleClassName="space-20-40" />
            <p>
              Case in point: Anthony&apos;s recent work for tech startup Motiv won a
              <strong>
                <HoverImg video src={Webby} text=" WEBBY AWARD " />
              </strong>
              and helped generate the company&apos;s first thousand sales with almost zero advertising.
            </p>
            <Space styleClassName="space-20-40" />
            <p>
              In addition to helping clients like ESPN and Netflix rise to victory against their competitors, Anthony
              shares his passion with future design professionals, leading creative workshops at
              <strong>
                <HoverImg video src={Usc} text=" USC'S " />
              </strong>
              Annenberg Digital Lounge, serving on the board of AIGA Los Angeles and as an expert panelist for the
              annual GlobalTrend Marketing Awards.
            </p>
            <Space styleClassName="space-20-40" />
            <a target="_blank" rel="noopener noreferrer" href={resumePdf} className="resume-link">
              Download Resume
            </a>
          </div>
          <div>
            <span className="sub-title">EDUCATION</span>
            <Space styleClassName="space-20" />
            <span className="sequel-text">
              WOODBURY UNIVERSITY
              <br />
              BFA GRAPHIC DESIGN, 2006
            </span>
            <Space styleClassName="space-50" />
            <span className="sub-title">EXPERIENCE</span>
            <Space styleClassName="space-20" />
            <span className="sequel-text">
              PRINCIPAL, CREATIVE DIRECTOR
              <br />
              AD VICTOREM, 2017-
            </span>
            <Space styleClassName="space-25" />
            <span className="sequel-text">
              CREATIVE DIRECTOR
              <br />
              AZUBU.TV, 2015-2017
            </span>
            <Space styleClassName="space-25" />
            <span className="sequel-text">
              INDEPENDENT CREATIVE DIRECTOR
              <br />
              CONSENSUS INC., 2013-2015
            </span>
            <Space styleClassName="space-25" />
            <span className="sequel-text">
              CREATIVE DIRECTOR
              <br />
              STARMEN DESIGN GROUP, 2008-2014
            </span>
            <Space styleClassName="space-25" />
            <span className="sequel-text">
              MARKETING ART DIRECTOR
              <br />
              SOTHEBY’S REAL ESTATE, 2006-2008
            </span>
            <Space styleClassName="space-50" />
            <span className="sub-title">CONTACT</span>
            <Space styleClassName="space-20" />
            <SocialLinks styleClassName="social-link-content" />
            <Space styleClassName="space-20" />
            <a href="mailto:hello@anthonydesigner.com" className="email-link">
              EMAIL
            </a>
          </div>
        </ContentGrid>
      </Content>
      <Space styleClassName="space-100-200" />
      <div className="white-section">
        <Space styleClassName="space-100-200" />
        <Content>
          <SectionTitle
            viewBox="0 0 1282.7 132.5"
            path="M1194.1 36.5h86.5V5.6h-137.5V127h138.6V96.5h-87.6V79.9h82.1V51.8h-82.1V36.5zM1075.9 42h56.8c-1.5-32.8-32.8-41-78.4-41-45.9 0-78.7 8.2-78.5 41.1.2 27.2 21.4 34.8 47.8 37.7l39.4 4.4c12.6 1.4 15.5 4.1 15.5 8.7s-4.4 7-22.3 7c-15.8 0-24.8-2.2-25.7-12.9h-57.8c1.5 36.4 30.1 44.5 82.8 44.5 53.7 0 82.6-6.8 82.6-42.7 0-25.5-18.7-36.4-47.8-39.1l-42.2-3.9c-11.9-1-14.8-3.1-14.8-7.3s3.9-7 20.2-7c14.9.1 21.7 4.2 22.4 10.5zm-106.6 85V5.6h-51V127h51zM913.9 5.6H768V42h47.4v85h51V42h47.4V5.6h.1zM696.3 62.9h-38.1V42.1h38.1c9.7 0 12.9 3.4 12.9 10.5 0 7-3.4 10.3-12.9 10.3zm44.9 19.5v-1.7c15.6-4.1 24.8-13.4 24.8-33.3 0-26.5-13.1-41.8-54.1-41.8H607.2V127h51V92.6h34.5l19.7 34.3h56.3l-27.5-44.5zM513.7 36.5h86.5V5.6H462.7V127h138.5V96.5h-87.5V79.9h82.1V51.8h-82.1V36.5zM389.1 61h-36V38.6h36c10.5 0 13.9 3.7 13.9 11.4 0 7.4-3.5 11-13.9 11zm15.7-55.4H302.1V127h51V92.6h51.7c40.5 0 54.1-13.6 54.1-42.8-.1-29.9-13.2-44.2-54.1-44.2zm-153.6 58l46.6-58h-59.7L220 32.1 201.8 5.6h-59.7l46.6 58-52 63.4h62.2L220 96.5l21 30.5h62.2l-52-63.4zM52 36.5h86.5V5.6H1V127h138.6V96.5H52V79.9h82.1V51.8H52V36.5z"
            styleClassName="section-title-expertise"
          />
          <ContentGrid styleClassName="content-grid-3">
            <div>
              <h2>Strategy</h2>
              <Space styleClassName="space-25" />
              <p>
                Strategy is the underlying foundation of every great brand experience. Strategy that is centered on
                clarifying a brand’s message to inform their decisions and shape their actions.
              </p>
              <Space styleClassName="space-25-50" />
              <span className="expertise-list">
                RESEARCH &amp; ANALYSIS
                <br />
                TREND &amp; INSIGHT
                <br />
                CUSTOMER EXPERIENCE
                <br />
                BRAND PLATFORM &amp; POSITIONING
                <br />
                GO-TO-MARKET PLANNING
                <br />
                CONTENT &amp; MESSAGING
              </span>
            </div>
            <div>
              <h2>Design</h2>
              <Space styleClassName="space-25" />
              <p>
                From voice to tone to style, every expression matters. Brand design shapes a brand experience by
                creating identity touchpoints from design systems to key messages.
              </p>
              <Space styleClassName="space-25-50" />
              <span className="expertise-list">
                BRAND IDENTITY
                <br />
                VISUAL LANGUAGE
                <br />
                PACKAGING DESIGN
                <br />
                BRAND CAMPAIGN
                <br />
                SIGNATURE ASSETS
                <br />
                BRAND GUIDELINES
              </span>
            </div>
            <div>
              <h2>DIGITAL</h2>
              <Space styleClassName="space-25" />
              <p>
                Creative functionality with intuitive design makes every interaction more meaningful. Embracing digital
                as an extension of the physical brand has the power to elevate the experience.
              </p>
              <Space styleClassName="space-25-50" />
              <span className="expertise-list">
                FRONT END WEB DESIGN
                <br />
                UI DESIGN
                <br />
                UX STRATEGY
                <br />
                APP DESIGN
                <br />
                CMS INTEGRATIONS
                <br />
                DIGITAL ADVERTISING
              </span>
            </div>
          </ContentGrid>
        </Content>
        <Space styleClassName="space-100-200" />
        <Content>
          <SectionTitle
            viewBox="0 0 1595.49 132.6"
            path="M1532.29 42h56.8c-1.5-32.8-32.8-41-78.4-41-45.9 0-78.7 8.2-78.5 41.1.2 27.2 21.4 34.8 47.8 37.7l39.4 4.4c12.6 1.4 15.5 4.1 15.5 8.7s-4.4 7-22.3 7c-15.8 0-24.8-2.2-25.7-12.9h-57.8c1.5 36.4 30.1 44.5 82.8 44.5 53.7 0 82.6-6.8 82.6-42.7 0-25.5-18.7-36.4-47.8-39.1l-42.2-3.9c-11.9-1-14.8-3.1-14.8-7.3s3.9-7 20.2-7c14.9.1 21.7 4.2 22.4 10.5zm-154.6-36.4v63.6h-1l-50.5-63.6h-58.7V127h47.9V62.7h1l51.2 64.3h58V5.6h-47.9zm-204.6 88.6c-23.1 0-33.3-10-33.3-27.9 0-17.8 10.2-27.9 33.3-27.9s33.3 10 33.3 27.9c0 17.8-10.2 27.9-33.3 27.9zm0-93.2c-60.3 0-89.1 20.9-89.1 65.3s28.7 65.3 89.1 65.3 89.1-20.9 89.1-65.3c-.1-44.4-28.8-65.3-89.1-65.3zm-94.6 126V5.6h-51V127h51zm-55.4-121.4h-145.8V42h47.4v85h51V42h47.4V5.6zm-227.6 74.5l15.8-35h1l15.8 35h-32.6zm53.7 46.9h54.6L845.29 5.6h-67L719.79 127h54.6l6.9-15.3h61l6.9 15.3zm-128.7 0V5.6h-51V127h51zm-55.9 0V91.3h-84.5V5.6h-51V127h135.5zm-143.1 0V5.6h-51V127h51zm-56-87.1V5.6h-137.8V127h51V91.6h82.1V59h-82.1V40h86.8v-.1zm-142.8 0V5.6h-137.8V127h51V91.6h82.1V59h-82.1V40h86.8v-.1zM77.29 80.1l15.8-35h1l15.8 35h-32.6zm53.7 46.9h54.6L127.09 5.6h-67L1.59 127h54.6l6.9-15.3h61l6.9 15.3z"
            styleClassName="section-title-expertise"
          />
          <ContentGrid styleClassName="content-grid-4">
            <img src={aigaLogo} alt="" />
            <img src={tofcLogo} alt="" />
            <img src={imcLogo} alt="" />
            <img src={designedLogo} alt="" />
            <img src={uscLogo} alt="" />
          </ContentGrid>
          <Space styleClassName="space-100-200" />
        </Content>
      </div>
      <Content>
        <Space styleClassName="space-100-200" />
        <SectionTitle
          viewBox="0 0 997.7 132.6"
          path="M934.5 42h56.8c-1.5-32.8-32.8-41-78.4-41-45.9 0-78.7 8.2-78.5 41.1.2 27.2 21.4 34.8 47.8 37.7l39.4 4.4c12.6 1.4 15.5 4.1 15.5 8.7s-4.4 7-22.3 7c-15.8 0-24.8-2.2-25.7-12.9h-57.8c1.5 36.4 30.1 44.5 82.8 44.5 53.7 0 82.6-6.8 82.6-42.7 0-25.5-18.7-36.4-47.8-39.1l-42.2-3.9c-11.9-1-14.8-3.1-14.8-7.3s3.9-7 20.2-7c14.9.1 21.7 4.2 22.4 10.5zM832.8 5.6H686.9V42h47.4v85h51V42h47.4V5.6h.1zm-198.2 0v63.6h-1L583.1 5.6h-58.6V127h47.9V62.7h1l51.2 64.3h58V5.6h-48zM430.9 36.5h86.5V5.6H379.9V127h138.5V96.5h-87.5V79.9H513v-28h-82.1V36.5zM372.3 127V5.6h-51V127h51zm-55.9 0V91.3h-84.5V5.6h-51V127h135.5zM116.3 54.5h58.8C174.2 20.2 147.4 1 88.5 1S1 21.9 1 66.3s28.7 65.3 87.5 65.3 86-19.2 86.9-56.4h-58.8c-1 10.7-6.5 19-28.1 19s-31.8-10-31.8-27.9c0-17.8 10.2-27.9 31.8-27.9s26.9 8.3 27.8 16.1z"
        />
        <ContentGrid styleClassName="content-grid-5">
          {clients.map(src => (
            <AutoScale key={src}>
              <img src={src} alt="" />
            </AutoScale>
          ))}
        </ContentGrid>
        <Space styleClassName="space-100-200" />
      </Content>
      <Content>
        <SectionTitle
          viewBox="0 0 1036.19 132.5"
          path="M972.99 42h56.8c-1.5-32.8-32.8-41-78.4-41-45.9 0-78.7 8.2-78.5 41.1.2 27.2 21.4 34.8 47.8 37.7l39.4 4.4c12.6 1.4 15.5 4.1 15.5 8.7s-4.4 7-22.3 7c-15.8 0-24.8-2.2-25.7-12.9h-57.8c1.5 36.4 30.1 44.5 82.8 44.5 53.7 0 82.6-6.8 82.6-42.7 0-25.5-18.7-36.4-47.8-39.1l-42.2-3.9c-11.9-1-14.8-3.1-14.8-7.3s3.9-7 20.2-7c14.9.1 21.7 4.2 22.4 10.5zm-189.4-.7c20.2 0 29.2 6.8 29.2 25s-9 25-29.2 25h-23.5v-50h23.5zm13.9-35.7h-88.4V127h88.4c49.1 0 71.1-16.3 71.1-60.7s-21.9-60.7-71.1-60.7zm-162.5 57.3h-38.1V42.1h38.1c9.7 0 12.9 3.4 12.9 10.5 0 7-3.4 10.3-12.9 10.3zm44.9 19.5v-1.7c15.6-4.1 24.8-13.4 24.8-33.3 0-26.5-13.1-41.8-54.1-41.8h-104.7V127h51V92.6h34.5l19.7 34.3h56.3l-27.5-44.5zM438.39 80l15.8-35h1l15.8 35h-32.6zm53.6 47h54.6L488.09 5.6h-67L362.69 127h54.6l6.9-15.3h61l6.8 15.3zm-139.9 0l33.7-121.4h-51.2l-15.6 73.6h-1l-17.2-73.6h-53.4l-17 73.6h-1l-15.5-73.6h-51.5l32.7 121.4h61.7l16.8-72.8h1l16.8 72.8h60.7zM77.29 80l15.8-35h1l15.8 35h-32.6zm53.7 47h54.6L127.09 5.6h-67L1.59 127h54.6l6.9-15.3h61l6.9 15.3z"
        />
        <Space styleClassName="space-80" />
        <table>
          <tbody>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={webby} text="WEBBY AWARDS" />
                </span>
              </td>
              <td>People’s Voice</td>
              <td>Motiv Inc.</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={how} text="HOW DESIGN AWARDS" />
                </span>
              </td>
              <td>Reader’s Choice</td>
              <td>Ad Victorem</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={tellys} text="The Telly Awards" />
                </span>
              </td>
              <td>Silver</td>
              <td>Metro Los Angeles</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={w3} text="W3 AWARDS" />
                </span>
              </td>
              <td>Silver</td>
              <td>Motiv Inc.</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={communicator} text="COMMUNICATOR AWARDS" />
                </span>
              </td>
              <td>Silver</td>
              <td>Motiv Inc.</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={aaa} text="AMERICAN ADVERTISING AWARDS" />
                </span>
              </td>
              <td>Silver</td>
              <td>Motiv Inc.</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={hermes} text="HERMES CREATIVE AWARDS" />
                </span>
              </td>
              <td>Platinum</td>
              <td>Motiv Inc.</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>
                <span className="sequel-text">
                  <HoverImg src={dotcomm} text="DOTCOMM AWARDS" />
                </span>
              </td>
              <td>Platinum</td>
              <td>Motiv Inc.</td>
              <td>2017</td>
            </tr>
          </tbody>
        </table>
      </Content>
      <Footer />
    </div>
  );
}

export default About;
