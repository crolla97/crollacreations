import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import { gsap } from 'gsap'


const Hamburger = ({ state }) => {
  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // Close menu
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Open menu
      
    }
    
  }, [state])

  return (
    <div ref={el => (menu = el)} className="hamburger-menu">
      <div className="menu-secondary-background-colour"></div>
      <div className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger