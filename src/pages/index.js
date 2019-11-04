import React, {useEffect} from "react"

import Layout from "../components/layout"
import AboutSect from '../components/indexPage/aboutSect'
import PortfolioSection from '../components/portfolio'
import SEO from "../components/seo"
import '../styles/pages/index.scss'
import TimelineMax from 'TimelineMax';
import { Power4 } from "gsap";
import 'animation.gsap';
import 'debug.addIndicators';
import { useWindowSize } from '../hooks/useWindowDimensions'

const IndexPage = () => {

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
      .staggerFrom('.hide-text', 0.6, {autoAlpha: 0, y:"100%", ease:Power4.easeOut}, 0.2)
      .to('.role-bg', 0.1, {opacity:1})
      .to('.role-text', 0.1, {opacity:1})
      .to('.role-bg', 0.3, {scaleX:0})
      .from('.social-icon', 0.3, {autoAlpha:0, y:"100%"}, "-=0.3")
      .to('.side-links', 0.8, {x: 0, ease:Power4.easeOut});
    }
    function mobileTL() {
      deskAnim.clear()
      mobAnim
      .staggerFrom('.hide-text', 1.5, {autoAlpha: 0, y:"100%", ease:Power4.easeOut}, 0.15)
      .to('.role-bg', 0.3, {opacity:1}, "-=1")
      .to('.role-text', 0.1, {opacity:1}, "-=0.8")
      .to('.role-bg', 0.3, {scaleX:0}, "-=0.6")
      .from('.social-icon', 0.3, {autoAlpha:0, y:"100%"}, '-=0.4')
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid-12 full-height">
        <div className="landing">
          <h1 className="dbl-height">
            <span className="hide-text">I Create <span className="italic">Unique,</span></span>
          </h1>
          <h1>
            <span className="hlt-text hide-text">Eye-Catching</span>
          </h1>
          <h1>
            <span className="hide-text">Websites</span>
          </h1>
          <div className="role-headers">
            <span className="role">
              <span className="role-text">Front-end developer</span>
              <span className="role-bg"></span>
            </span>
            <span className="role">
              <span className="role-text">UI designer</span>
              <span className="role-bg"></span>
            </span>
            <span className="role">
              <span className="role-text">Full-time learner</span>
              <span className="role-bg"></span>
            </span>
          </div>
          <div className="social-links">
            <a href="https://github.com/crolla97" rel="noopener noreferrer" target="blank"><img src={require('../images/github-black.png')} alt="github logo" className="social-icon"/></a>
            <a href="#" rel="noopener noreferrer" target="blank"><img src={require('../images/instagram-black.png')} alt="instagram logo" className="social-icon"/></a>
            <a href="#" rel="noopener noreferrer" target="blank"><img src={require('../images/linked-black.png')} alt="linked in logo" className="social-icon"/></a>
            <a href='#' rel="noopener noreferrer" target="blank"><img src={require('../images/twitter-black.png')} alt="twitter logo" className="social-icon"/></a>
          </div>
        </div>
      </div>
      <div className="project-intro">
        <h2>Here's</h2>
        <h2>Some</h2>
        <h2>Recent</h2>
        <h2>Work</h2>
        <img className="arrow-down" src={require('../images/right-chevron.png')} alt="down arrow"/>
      </div>
      <PortfolioSection />
      <AboutSect/>
    </Layout>
  )
}

export default IndexPage
