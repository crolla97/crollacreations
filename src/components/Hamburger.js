import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
  staggerReveal,
  staggerRevealClose,
  staggerHamburgerText
} from './animations'


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
                    <AniLink cover to="/" bg="#000000" direction="top" duration={0.8}>
                      Home
                    </AniLink> 
                  </li>
                  <li ref={el => (line2 = el)}>
                    <AniLink cover to="/portfolio" bg="#000000" direction="top" duration={0.8}>
                      Portfolio
                    </AniLink> 
                  </li>
                  <li ref={el => (line3 = el)}>
                    <AniLink cover to="/blog" bg="#000000" direction="top" duration={0.8}>
                      Blog
                    </AniLink> 
                  </li>
                  <li ref={el => (line4 = el)}>
                    <AniLink cover to="/about" bg="#000000" direction="top" duration={0.8}>
                      About
                    </AniLink>                
                  </li>
                  <li ref={el => (line5 = el)}>
                    <AniLink cover to="/contact" bg="#000000" direction="top" duration={0.8}>
                      Contact
                    </AniLink> 
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