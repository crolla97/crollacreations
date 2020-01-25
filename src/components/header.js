import PropTypes from "prop-types"
import React, { useState, useEffect} from "react"
import { Link } from "gatsby";

import Hamburger from './Hamburger'

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
        <Link to='/' className="logo">
          <span>CC</span>
        </Link>
        <div disabled={disabled} className="menu" onClick={handleMenu}>
          MENU
        </div>
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