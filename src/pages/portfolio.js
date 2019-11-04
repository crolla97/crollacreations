import React, {useEffect} from "react"

import Layout from "../components/layout"
import Portfolio from '../components/portfolio'
import SEO from "../components/seo"
import '../styles/pages/portfolio.scss'
import TimelineMax from 'TimelineMax';
import { Power4 } from "gsap";
import { useWindowSize } from '../hooks/useWindowDimensions'

const PortfolioPage = () => {

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
    }
    function mobileTL() {
      deskAnim.clear()
      mobAnim
      .staggerFrom('.hide-text', 1.5, {autoAlpha: 0, y:"100%", ease:Power4.easeOut}, 0.15)
    }
  }, [])
  
  return (
  <Layout>
    <SEO title="Portfolio" />
    <div className="project-wrapper">
      <div className="project-page-intro">
        <h2>
          <span className="hide-text">Here's</span>
        </h2>
        <h2>
          <span className="hide-text">Some</span>
        </h2>
        <h2>
          <span className="hide-text">Recent</span>
        </h2>
        <h2>
          <span className="hide-text">Work</span>
        </h2>
        <img className="arrow-down" src={require('../images/right-chevron.png')} alt="down arrow"/>
      </div>
    </div>
    <Portfolio />
  </Layout>)
  }

export default PortfolioPage