import PropTypes from "prop-types"
import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Hamburger from './hamburger'

const Header = () => {

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "MENU"
  });

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'CLOSE'
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'MENU'
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'CLOSE'
      });
    }
  }

  // Determine if button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200);
  }

  return (
    <header>
      <div className="header-container">
        <AniLink to='/' cover direction="top" className="logo" bg="#EE9700">
          <span>CC</span>
        </AniLink>
        <button disabled={disabled} className="menu" onClick={handleMenu}>
          {state.menuName}
        </button>
      </div>
      <Hamburger state={state}/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header