import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.jpg'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: portfolio1,
    title: 'Project1',
    github: 'http://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 2,
    image: portfolio2,
    title: 'Project2',
    github: 'http://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Project3',
    github: 'http://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Project4',
    github: 'http://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 5,
    image: portfolio5,
    title: 'Project5',
    github: 'http://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Project6',
    github: 'http://github.com',
    demo: 'https://dribbble.com/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
               <div className='portfolio__item-image'>
                <img src={image} alt={title} />
               </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }       
      </div>
    </section>
  )
}

export default portfolio