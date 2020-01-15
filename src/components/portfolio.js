import React, {useEffect} from "react"

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import TimelineMax from 'TimelineMax';
import { Power4 } from "gsap";
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import { useWindowSize } from '../hooks/useWindowDimensions'
import '../styles/components/portfolio.scss'

const PortfolioSection = () => {
  const dimensions = useWindowSize();
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
  
  useEffect(() => {
    let projects = document.querySelectorAll('.project');
    projects.forEach((elements) => {
    let picOverlay = elements.querySelectorAll('.box-overlay');
    let projectInfo = elements.querySelectorAll('.project-info');
    let smallTitle = elements.querySelectorAll('.small-title');
    let projectLink = elements.querySelectorAll('.project-link');
    let title = elements.querySelectorAll('h4');
    let box = elements.querySelectorAll('.box');

    const mobTL = new TimelineMax()
    const mobController = new ScrollMagic.Controller()
    const deskTL = new TimelineMax()
    const deskController = new ScrollMagic.Controller()

    if (dimensions.windowWidth < 1024) {
      // elements.classList.remove('grid-20');
      deskTL.kill()
      deskController.destroy(true)
      mobProject()
    } else if (dimensions.windowWidth >= 1024) {
      // elements.classList.add('grid-20');  
      mobTL.kill();
      mobController.destroy(true)
      deskProject()
    }
    
    function mobProject() {
      mobTL
      .delay(1)
      .from(box, 1, {width: "100%", height: "100%", ease:Power4.easeOut})
      .from(projectInfo, 1, {autoAlpha:0, y:"50%", ease:Power4.easeOut}, "-=0.8")
      
      // ScrollMagic Scroll Scene
      new ScrollMagic.Scene({
        triggerElement: elements,
        triggerHook: "onEnter",
      })
      .setTween(mobTL)
      .reverse(false)
      .addTo(mobController);
    }
    
    function deskProject() {
      deskTL
      .from(box, 0.1, {opacity:0})
      .fromTo(picOverlay, 1.4, {skewX:30, scale:1.9}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut})
      .from(projectInfo, 0.6, {scaleY:0, transformOrigin: "bottom left"}, "-=1")
      .from(smallTitle, 0.3, {autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=0.7")
      .from(projectLink, 0.3, {autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=0.7")
      .from(title, 0.3, {autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=0.7")

      // ScrollMagic Scroll Scene
      new ScrollMagic.Scene({
        triggerElement: elements,
      })
      .setTween(deskTL)
      .reverse(false)
      .addTo(deskController);
    }
  })
}, [])

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
