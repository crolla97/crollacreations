import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
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
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
