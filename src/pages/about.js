import React, {useEffect} from "react"

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/pages/about.scss'
import TimelineMax from 'TimelineMax';
import { Power4 } from "gsap";
import { useWindowSize } from '../hooks/useWindowDimensions'

const AboutPage = (props) => {
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
          <p>Hi! I am Cristiano Crolla, a frontend developer based in Edinburgh focused on building functional, performant websites. I am proudly self-taught and always learning new things.</p>
          <p>I created this website to catalogue my progress throughout learning and show off some of my favourite projects. To view more of my work head to my <a  rel="noopener noreferrer" href="https://github.com/crolla97">Github</a></p>
        </div>
        <div className="orangeLine orangeLine2"></div>
        <div className="skills">
          <ul className="front">
            <span>Front End</span>          
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>GatsbyJS</li>
            <li>GSAP (Greensock Animation)</li>
          </ul>
          <ul className="back">
            <span>Back End</span>
            <li>Firebase</li>
            <li>Contentful</li>
            <li>Node.js</li>
          </ul>
          <ul className="other">
            <span>Other</span>
            <li>Git / Github</li>
            <li>GraphQL</li>
            <li>SEO</li>
            <li>Adobe XD</li>
          </ul>
        </div>
        <div className="orangeLine orangeLine3"></div>
        <Img fluid={props.data.profile.childImageSharp.fluid} alt="portrait"/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    profile: file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage
