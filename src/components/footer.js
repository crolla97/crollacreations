import React from 'react'

import '../styles/components/footer.scss'

const Footer = () => {

  return (
    <footer>
      <span>crollacreations@gmail.com</span>
      <div className="footer-social-links">
        <a href="https://github.com/crolla97" rel="noopener noreferrer" target="blank"><img src={require('../images/github-black.png')} alt="github logo"/></a>
        <a href="https://www.instagram.com/crollacreations" rel="noopener noreferrer" target="blank"><img src={require('../images/instagram-black.png')} alt="instagram logo"/></a>
        <a href='https://twitter.com/crollacreations' rel="noopener noreferrer" target="blank"><img src={require('../images/twitter-black.png')} alt="twitter logo"/></a>
      </div>
    </footer>
  )
}

export default Footer