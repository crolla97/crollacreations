import React, { useRef, useEffect } from "react"

import Layout from "../components/layout"
import AboutSect from '../components/indexPage/aboutSect'
import PortfolioSection from '../components/portfolio'
import PortfolioIntro from '../components/portfolioIntro'
import SEO from "../components/seo"
import { gsap } from 'gsap'
import { staggerHomeText } from '../components/Animations'

const IndexPage = () => {

  // Create varibles of our dom nodes
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let roleBackground1 = useRef(null);
  let roleBackground2 = useRef(null);
  let roleBackground3 = useRef(null);
  let roleText1 = useRef(null);
  let roleText2 = useRef(null);
  let roleText3 = useRef(null);
  let socialIcons = useRef(null);

  useEffect(() => {

    staggerHomeText(line1, line2, line3);
    gsap.to([roleBackground1, roleBackground2, roleBackground3], {
      delay: 1,
      duration: 0.1,
      opacity: 1
    });
    gsap.to([roleText1, roleText2, roleText3], {
      delay: 1.1,
      duration: 0.1,
      opacity: 1
    });
    gsap.to([roleBackground1, roleBackground2, roleBackground3], {
      delay: 1.2,
      duration: 0.3,
      scaleX: 0
    });
    gsap.from(socialIcons, {
      duration: 0.3,
      delay: 1.5,
      autoAlpha: 0,
      y: "100%"
    })
  }, [])



  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid-12 full-height">
        <div className="landing">
          <h1 className="dbl-height">
            <span className="hide-text" ref={el => (line1 = el)}>I Create <span className="italic">Unique,</span></span>
          </h1>
          <h1>
            <span className="hlt-text hide-text" ref={el => (line2 = el)}>Eye-Catching</span>
          </h1>
          <h1>
            <span className="hide-text" ref={el => (line3 = el)}>Websites</span>
          </h1>
          <div className="role-headers">
            <span className="role">
              <span className="role-text" ref={el => (roleText1 = el)}>Full-stack developer</span>
              <span className="role-bg" ref={el => (roleBackground1 = el)}></span>
            </span>
            <span className="role">
              <span className="role-text" ref={el => (roleText2 = el)}>Ruby on Rails</span>
              <span className="role-bg" ref={el => (roleBackground2 = el)}></span>
            </span>
            <span className="role">
              <span className="role-text" ref={el => (roleText3 = el)}>Javascript</span>
              <span className="role-bg" ref={el => (roleBackground3 = el)}></span>
            </span>
          </div>
          <div className="social-links"  ref={el => (socialIcons = el)}>
            <a href="https://github.com/crolla97" rel="noopener noreferrer" target="blank"><img src={require('../images/github-black.png')} alt="github logo" className="social-icon"/></a>
            <a href="https://www.instagram.com/crollacreations" rel="noopener noreferrer" target="blank"><img src={require('../images/instagram-black.png')} alt="instagram logo" className="social-icon"/></a>
            <a href='https://www.linkedin.com/in/cristiano-crolla-4b30a0159/' rel="noopener noreferrer" target="blank"><img src={require('../images/linked-black.png')} alt="linkedin logo" className="social-icon"/></a>
          </div>
        </div>
      </div>
      <div className="home-container">
        <PortfolioIntro />
      </div>
      <PortfolioSection />
      <AboutSect/>
    </Layout>
  )
}

export default IndexPage
