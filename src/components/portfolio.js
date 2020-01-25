import React, {useEffect} from "react"

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query {
      massimo: file(relativePath: { eq: "images/massimo-dining&bar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      cafe: file(relativePath: { eq: "images/gatsby-starter-cafe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      portfolio: file(relativePath: { eq: "images/default.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      budget: file(relativePath: { eq: "images/budget.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pork: file(relativePath: { eq: "images/pork-dantes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  

  return (
    <div>
      <section>
        <div className="project project1 grid-20">
          <div className="box">
            <div className="project-image">
              <Img fluid={data.pork.childImageSharp.fluid} alt="dining room"/>
            </div>
            <div className="box-overlay"></div>
          </div>
          <div className="project-info">
            <span className="small-title">Gatsby // React // GraphQL // SCSS // Netlify</span>
            <h4>Dantes Restaurant</h4>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://github.com/crolla97/Dantes'>Code</a>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://dantesrestaurant.netlify.com/'>Live</a>
          </div>
        </div>  
      </section>

      <section>
        <div className="project project2 grid-20">
          <div className="box">
            <div className="project-image">
              <Img fluid={data.massimo.childImageSharp.fluid} alt="dining room"/>
            </div>
            <div className="box-overlay"></div>
          </div>
          <div className="project-info">
            <span className="small-title">Gatsby // React // GraphQL // SCSS // Netlify Forms // LeafletJS</span>
            <h4>Massimo Restaurant</h4>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://github.com/crolla97/Massimo-Restaurant'>Code</a>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://massimo.netlify.com/'>Live</a>
          </div>
        </div>  
      </section>

      <section>
        <div className="project project3 grid-20">
          <div className="box">
            <div className="project-image">
              <Img fluid={data.cafe.childImageSharp.fluid} alt="dining room"/>
            </div>
            <div className="box-overlay"></div>
          </div>
          <div className="project-info">
            <span className="small-title">Gatsby // React // GraphQL // SCSS // LeafletJS</span>
            <h4>Gatsby Starter Cafe</h4>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://github.com/crolla97/gatsby-starter-cafe'>Code</a>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://www.gatsbyjs.org/starters/crolla97/gatsby-starter-cafe/'>Live</a>
          </div>
        </div>  
      </section>
      
      <section>
        <div className="project project4 grid-20">
          <div className="box">
            <div className="project-image">
              <Img fluid={data.budget.childImageSharp.fluid} alt="dining room"/>
            </div>
            <div className="box-overlay"></div>
          </div>
          <div className="project-info">
            <span className="small-title">React // Redux // Firebase // Auth // Materialize</span>
            <h4>Budget App</h4>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://github.com/crolla97/react-budget-app'>Code</a>
            <a rel="noopener noreferrer" target="blank" className="project-link" href='https://budget-app-bccb8.firebaseapp.com/'>Live</a>
          </div>
        </div>  
      </section>
      
    </div>
  )
}

export default PortfolioSection

/*
<section>
  <div className="project project5 grid-20">
    <div className="box">
      <div className="project-image">
        <Img fluid={data.portfolio.childImageSharp.fluid} alt="dining room"/>
      </div>
      <div className="box-overlay"></div>
    </div>
    <div className="project-info">
      <span className="small-title">Gatsby // React // GraphQL // GSAP // SCSS</span>
      <h4>Crolla Creations</h4>
      <a rel="noopener noreferrer" target="blank" className="project-link" href='https://github.com/crolla97/crollacreations'>Code</a>
    </div>
  </div>  
</section>
*/
