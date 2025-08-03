import React from 'react'
import './Footer.css'
import CopyRight from './CopyRight'
const Footer = () => {
  return (
    <div>
        <div className="Footer">
            <div className="contacts">
            
            <div className="footer-container">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="../src/pages/home/footer/images/Instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="../src/pages/home/footer/images/LinkedIn.png" alt="LinkedIn" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="../src/pages/home/footer/images/Twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <img src="../src/pages/home/footer/images/Pinterest.png" alt="Pinterest" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" />
        </a>
        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
          <img src="../src/pages/home/footer/images/Snapchat.png" alt="Snapchat" />
        </a>
        <a href="https://www.sharechat.com" target="_blank" rel="noopener noreferrer">
          <img src="../src/pages/home/footer/images/Sherechat.jpg" alt="ShareChat" />
        </a>
      </div>
    </div>
            </div>
            <CopyRight/>
        </div>
    </div>
  )
}

export default Footer