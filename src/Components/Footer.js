import React from 'react'
import '../Css/Stylesheet/Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-image">
        <img src={require('../Images/logo.svg')} alt="logo" id="footer-logo" />
        <div className="twitter">
          <img
            src={require('../Images/Twitter.svg')}
            alt="twitter"
            id="twitter"
          />
        </div>
        <img
          src={require('../Images/social-icon.svg')}
          alt="icons"
          id="icons"
        />
      </div>
    </div>
  )
}

export default Footer
