import React from "react"

import {useStaticQuery, graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

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
            date(formatString: "MMMM DD, YYYY")
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
        <ul className="blog-list">
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.id} className="blog-list--item">
              <Link to={`/blog/${edge.node.fields.slug}`} className="blogLink">
                <h3><span>></span>{edge.node.frontmatter.title}</h3>
                <div>
                  <span>{edge.node.frontmatter.date}</span>
                  <div className="split"></div>
                  <span>{edge.node.timeToRead} min read</span>                
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