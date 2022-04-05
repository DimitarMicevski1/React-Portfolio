import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/DimitarMicevski1' target="_blank"><FaGithub/></a>
        <a href='https://www.facebook.com/micevskidimitar' target="_blank"><BsFacebook/></a>
        <a href='https://www.instagram.com/micevski.dimitar/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials