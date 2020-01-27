import React, {useEffect, useRef} from "react"
import {gsap} from 'gsap'
import { ScrollScene } from 'scrollscene';

const PortfolioIntro = () => {

  const triggerRef = useRef(null)

  useEffect(() => {
    
    const { current: triggerElement } = triggerRef

    const tl = gsap.timeline({ paused: true })

    tl.from('.hide-portfolio-text', { delay: 0.4, duration: 1.5, autoAlpha: 0, y:"100%", ease: "power3.out", stagger: { each: 0.15 }})

    const scrollScene = new ScrollScene({
      triggerElement: triggerElement,
      triggerHook: 1,
      gsap: {
        timeline: tl,
      },
      scene: {
        reverse: false,
      }
    })

    // destroy on unmount
    return () => {
      scrollScene.destroy()
    }

  }, [])
  
  return (
    <div className="project-wrapper">
      <div ref={triggerRef} className="project-page-intro">
        <h2>
          <span className="hide-portfolio-text">Here's</span>
        </h2>
        <h2>
          <span className="hide-portfolio-text">Some</span>
        </h2>
        <h2>
          <span className="hide-portfolio-text">Recent</span>
        </h2>
        <h2>
          <span className="hide-portfolio-text">Work</span>
        </h2>
        <div className="arrow-container">
          <img className="arrow-down hide-portfolio-text" src={require('../images/right-chevron.png')} alt="down arrow"/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioIntro