import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


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