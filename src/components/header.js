import PropTypes from "prop-types"
import React, {useState} from "react"

import { Link } from "gatsby";

const Header = ({ siteTitle, parentCallback }) => {

  return (
    <header>
      <Link to='/' className="logo">
        <span>CC</span>
      </Link>
      <div className="menu">
        MENU
      </div>
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