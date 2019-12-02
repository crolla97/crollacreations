import React, {useEffect} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';


const AboutSect = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter:{ featured:{ eq: true } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
  `)
  
  useEffect(() => {
    const introBlogMobile = new TimelineMax()
    const controller = new ScrollMagic.Controller()  
    introBlogMobile
    .staggerFrom('.blog-posts', 0.8, {opacity:0, y:"100%"}, 0.2)
    .from('h3', 0.8, {opacity:0}, '-=1.2')
    new ScrollMagic.Scene({
      triggerElement: '.blog-intro',
    })
    .setTween(introBlogMobile)
    .reverse(false)
    .addTo(controller)
      
    })
  return (
    <div className="grid-12 intro-trigger">
        <section className="intro-section">
          <div className="blog-intro">
            <h3>I also run a blog</h3>
            <div className="blog-posts">
              <span className="post-header">Featured Post</span>
              <Link to={`/blog/${data.markdownRemark.fields.slug}`} className="post">{data.markdownRemark.frontmatter.title}</Link>
            </div>
          </div>
        </section>
      </div>
  )
}

export default AboutSect