import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import '../styles/components/layout.scss'
import '../styles/styles.scss';

const Layout = ({ children }) => {
  let [menuState, setMenu] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const toggleMenu = menuState ? 'open' : '';

  const callback = () => {
    setMenu(!menuState);
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}  parentCallback={callback} />
      <nav className={toggleMenu}>
        <div className="grid-20">
          <ul>
            <li><Link to="/" onClick={() => setMenu(!menuState)}>Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div>
            <a href="https://github.com/crolla97" rel="noopener noreferrer" target="blank"><img src={require('../images/github-black.png')} alt="github logo"/></a>
            <a href="#" rel="noopener noreferrer" target="blank"><img src={require('../images/instagram-black.png')} alt="instagram logo"/></a>
            <a href="#" rel="noopener noreferrer" target="blank"><img src={require('../images/linked-black.png')} alt="linked in logo"/></a>
            <a href='#' rel="noopener noreferrer" target="blank"><img src={require('../images/twitter-black.png')} alt="twitter logo"/></a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
