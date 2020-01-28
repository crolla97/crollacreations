import React from 'react'

const Footer = () => {

  return (
    <footer>
      <span>crollacreations@gmail.com</span>
      <div className="footer-social-links">
        <a href="https://github.com/crolla97" rel="noopener noreferrer" target="blank"><img src={require('../images/github-black.png')} alt="github logo"/></a>
        <a href="https://www.instagram.com/crollacreations" rel="noopener noreferrer" target="blank"><img src={require('../images/instagram-black.png')} alt="instagram logo"/></a>
        <a href='https://www.linkedin.com/in/cristiano-crolla-4b30a0159/' rel="noopener noreferrer" target="blank"><img src={require('../images/linked-black.png')} alt="linkedin logo"/></a>
      </div>
    </footer>
  )
}

export default Footer