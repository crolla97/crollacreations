import React from "react"

import Layout from "../components/layout"
import Portfolio from '../components/portfolio'
import SEO from "../components/seo"
import PortfolioIntro from '../components/portfolioIntro'

const PortfolioPage = () => {
  
  return (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioIntro />
    <Portfolio />
  </Layout>)
  }

export default PortfolioPage