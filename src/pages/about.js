import React, {useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/pages/about.scss'
import TimelineMax from 'TimelineMax';
import { Power4 } from "gsap";
import { useWindowSize } from '../hooks/useWindowDimensions'

const AboutPage = () => {
  const dimensions = useWindowSize()

  useEffect(() => {
    // New GSAP Timelines
    const mobAnim = new TimelineMax();
    const deskAnim = new TimelineMax();
    
    if (dimensions.windowWidth < 1024) {
      mobileTL()
    } else if (dimensions.windowWidth >= 1024) {
      desktopTL()
    }

    function desktopTL() {
      mobAnim.clear()
      deskAnim
      .staggerFrom('.hide-text', 1.5, {autoAlpha: 0, y:"100%", ease:Power4.easeOut}, 0.15)
      .to('.shrink', 1, {fontSize: 30, ease:Power4.easeOut}, "=-1")
    }
    function mobileTL() {
      deskAnim.clear()
      mobAnim
      .staggerFrom('.hide-text', 1.5, {autoAlpha: 0, y:"100%", ease:Power4.easeOut}, 0.15)
      .to('.shrink', 1, {fontSize: 20, ease:Power4.ease}, "=-1")

    }
  }, [])

  return (
    <Layout>
      <SEO title="About" />
      <div className="aboutContainer">
        <div className="aboutIntro">
          <h2>
            <span className="hide-text">A <span className="shrink">little</span></span>
          </h2>
          <h2>
            <span className="hide-text">introduction</span>
          </h2>
          <h2>
            <span className="hide-text">to who</span>
          </h2>
          <h2>
            <span className="hide-text">I am</span>
          </h2>
        </div>
        <div className="orangeLine orangeLine1"></div>
        <div className="aboutText">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="orangeLine orangeLine2"></div>
        <div className="skills">
          <ul className="dev">
            <span>Development</span>          
            <li>Javascript</li>
            <li>React</li>
            <li>css/scss</li>
            <li>GSAP - animations</li>
            <li>GatsbyJS</li>
            <li>GraphQL</li>
            <li>Webpack</li>
            <li>npm/yarn</li>
          </ul>
          <ul className="design">
            <span>Development</span>
            <li>Wireframing</li>
            <li>Adobe XD</li>
          </ul>
        </div>
        <div className="orangeLine orangeLine3"></div>
        <img src={require('../images/edinburgh.jpg')} alt="portrait"/>
      </div>
    </Layout>
  )
}

export default AboutPage
