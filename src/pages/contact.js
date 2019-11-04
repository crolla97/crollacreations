import React, {useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/pages/contact.scss'
import TimelineMax from 'TimelineMax';
import { Power4 } from "gsap";

const ContactPage = () => {

  useEffect(() => {
    // New GSAP Timelines
    const anim = new TimelineMax();
    
    anim
    .staggerFrom('.hide-text', 2, {autoAlpha: 0, y:"100%", ease:Power4.easeOut}, 0.35)
  }, [])

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contactContainer">
        <div className="contactIntro">
          <h2>
            <span className="hide-text">If you like what</span>
          </h2>
          <h2>
            <span className="hide-text">you've seen and</span>
          </h2>
          <h2>
            <span className="hide-text">have a project I</span>
          </h2>
          <h2>
            <span className="hide-text">could help you</span>
          </h2>
          <h2>
            <span className="hide-text">with, I'd love to</span>
          </h2>
          <h2>
            <span className="hide-text">hear from you.</span>
          </h2>
        </div>
        <div className="contact">
          <p>crollacreations@gmail.com</p>
          <p>@crollacreations</p>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
