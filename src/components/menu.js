import React, {useState} from 'react'
import { Link } from 'gatsby'


const Menu = ({ show }) => {
  let [openMenu, setMenu] = useState()
  
  removeItem = () => {
    show()
  }

  return (
    <div className="hamburger-menu">
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

export default Menu