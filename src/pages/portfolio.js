import React, {useEffect} from "react"

import Layout from "../components/layout"
import Portfolio from '../components/portfolio'
import SEO from "../components/seo"

const PortfolioPage = () => {
  
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