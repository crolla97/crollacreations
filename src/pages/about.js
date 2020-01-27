import React, { useRef, useEffect } from "react"

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { staggerAboutText, shrinkText } from '../components/animations'

const AboutPage = (props) => {
  
  // Create varibles of our dom nodes
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let shrink = useRef(null);
  
  useEffect(() => {

    // Animate introduction text
    staggerAboutText(line1, line2, line3, line4);
    shrinkText(shrink);

  }, [])

  return (
    <Layout>
      <SEO title="About" />
      <div className="aboutContainer">
        <div className="aboutIntro">
          <h2>
            <span className="hide-text line1" ref={el => (line1 = el)}>A <span className="shrink" ref={el => (shrink = el)}>little</span></span>
          </h2>
          <h2>
            <span className="hide-text line2" ref={el => (line2 = el)}>introduction</span>
          </h2>
          <h2>
            <span className="hide-text line3" ref={el => (line3 = el)}>to who</span>
          </h2>
          <h2>
            <span className="hide-text line4" ref={el => (line4 = el)}>I am</span>
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
