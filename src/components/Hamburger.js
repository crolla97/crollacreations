import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'
import TransitionLink from "gatsby-plugin-transition-link"
import {
  staggerReveal,
  staggerRevealClose,
  staggerHamburgerText
} from './Animations'


const Hamburger = ({ state }) => {
  // Variables for dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealBackgroundMenu = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // Close menu
      staggerRevealClose(revealMenu, revealBackgroundMenu)
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none' }
      })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Open menu
      gsap.to(menu, {
        duration: 0,
        css: {
          display: 'block'
        }
      });
      gsap.to([revealBackgroundMenu, revealMenu], {
        duration: 0,
        opacity: 1,
        height: '100%'
      })
      staggerReveal(revealBackgroundMenu, revealMenu);
      staggerHamburgerText(line1, line2, line3, line4, line5)
    }
    
  }, [state])

  return (
    <div ref={el => (menu = el)} className="hamburger-menu">
      <div ref={el => (revealBackgroundMenu = el)} className="menu-secondary-background-colour"></div>
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li ref={el => (line1 = el)} >
                    <Link to="/">Home</Link>
                  </li>
                  <li ref={el => (line2 = el)}>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li ref={el => (line3 = el)}>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li ref={el => (line4 = el)}>
                    <TransitionLink to="/about" exit={{
                      
                    }}>About</TransitionLink>
                  </li>
                  <li ref={el => (line5 = el)}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger