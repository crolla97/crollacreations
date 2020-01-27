import React, { useRef, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { staggerContactText } from '../components/Animations'

const ContactPage = () => {
  // Create variales for dom nodes
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let line6 = useRef(null);

  useEffect(() => {
    
    staggerContactText(line1, line2, line3, line4, line5, line6)

  }, [])

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contactContainer">
        <div className="contactIntro">
          <h2>
            <span className="hide-text" ref={el => (line1 = el)}>If you like what</span>
          </h2>
          <h2>
            <span className="hide-text" ref={el => (line2 = el)}>you've seen and</span>
          </h2>
          <h2>
            <span className="hide-text" ref={el => (line3 = el)}>have a project I</span>
          </h2>
          <h2>
            <span className="hide-text" ref={el => (line4 = el)}>could help you</span>
          </h2>
          <h2>
            <span className="hide-text" ref={el => (line5 = el)}>with, I'd love to</span>
          </h2>
          <h2>
            <span className="hide-text" ref={el => (line6 = el)}>hear from you.</span>
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
