import React from 'react'
import './about.css'
import ME from '../../assets/slika.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5> 
      <h2>About Me</h2> 

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div> 
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>IT Student</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Socials</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          
          <p>
            An organised, driven, hardworking student with a passion for 
            computers and IT. A highly approachable, positive individual with 
            good communication skills as well as the ability to lead, make 
            critical decisions and work to tight deadlines. Seeking to pursue 
            every avenue to achieve a career in IT.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About