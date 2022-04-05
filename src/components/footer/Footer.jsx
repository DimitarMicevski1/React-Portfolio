import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        { /* <li><a href="#services">Services</a></li> */ }
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/micevskidimitar" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/micevski.dimitar/" target="_blank"><FiInstagram/></a>
        <a href="https://github.com/DimitarMicevski1" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dimitar Micevski. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer