import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"

import '../styles/templates/post.scss'
import '../styles/templates/prism.scss'


export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
    }
    html
  }
}
`

const Blog = (props) => {
  const { previous,next } = props.pageContext;

  return (
    <Layout>
      <main>
        <article>
          <Link to="/blog">← Blog</Link>
          <SEO title={`${props.data.markdownRemark.frontmatter.title}`} />
          <h2>{props.data.markdownRemark.frontmatter.title}</h2>
          <span className="date" >{props.data.markdownRemark.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
          <div className="blog-links">
            <ul>
              <li>{previous && (
                <Link to={`/blog/${previous.fields.slug}`} rel="previous" className="prev">
                  <span>← Previous</span>
                  {previous.frontmatter.title}
                </Link>
                )}
              </li>
              <li>{next && (
                <Link to={`/blog/${next.fields.slug}`} rel="next" className="next">
                  <span>Next →</span>
                  {next.frontmatter.title}
                </Link>
                )}
              </li>
            </ul>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default Blog