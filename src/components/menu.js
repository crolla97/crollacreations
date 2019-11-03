import React, {useState} from 'react'
import { Link } from 'gatsby'

import '../styles/components/menu.scss'

const Menu = ({ show }) => {
  let [openMenu, setMenu] = useState()
  
  removeItem = () => {
    show()
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/porfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div>
        <img src={require('../images/github-black.png')} alt="github logo"/>
        <img src={require('../images/instagram-black.png')} alt="instagram logo"/>
        <img src={require('../images/linked-black.png')} alt="linked in logo"/>
        <img src={require('../images/twitter-black.png')} alt="twitter logo"/>
      </div>
    </nav>
  )
}

export default Menu