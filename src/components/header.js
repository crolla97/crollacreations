import PropTypes from "prop-types"
import React, {useState} from "react"

import '../styles/components/header.scss'
import { Link } from "gatsby";

const Header = ({ siteTitle, parentCallback }) => {
  let [open, setOpen] = useState(false);
  const topBar = open ? 'bar bar-top bar-top-anim' : 'bar bar-top';
  const midBar = open ? 'bar bar-mid bar-mid-anim' : 'bar bar-mid';
  const botBar = open ? 'bar bar-bot bar-bot-anim' : 'bar bar-bot';

  return (
    <header>
      <Link to='/' className="logo">
        <span>CC</span>
      </Link>
      <div className="hamburger-menu" onClick={() => {
        let newValue = !open
        setOpen(!open);
        parentCallback(newValue);
      }}>
        <div className={topBar}></div>
        <div className={midBar}></div>
        <div className={botBar}></div>
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