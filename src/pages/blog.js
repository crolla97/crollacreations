import React from "react"

import {useStaticQuery, graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/pages/blog.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD")
            description
          }
          fields {
            slug
          }
          timeToRead
          id
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blogContainer">
        <h2>Blog</h2>
        <div className="tags"></div>
        <ul className="blog-list">
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.id} className="blog-list--item">
              <Link to={`/blog/${edge.node.fields.slug}`} className="blogLink">
                <h3>{edge.node.frontmatter.title}</h3>
                <div>
                  <span>{edge.node.frontmatter.date}</span>
                  <div className="split"></div>
                  <span>{edge.node.timeToRead} min read</span>
                  <div className="split"></div>                  
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage