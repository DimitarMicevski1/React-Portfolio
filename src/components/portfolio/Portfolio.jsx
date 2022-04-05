import React from 'react'
import './portfolio.css'
import todoport from '../../assets/todoport.png'
import bootstrapport from '../../assets/bootstrapport.png'
import tictactoe from '../../assets/tictactoe.png'
// import portfolio4 from '../../assets/portfolio4.jpg'
// import portfolio5 from '../../assets/portfolio5.png'
// import portfolio6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: todoport,
    title: 'React - To do list',
    github: 'https://github.com/DimitarMicevski1/todo-app-React',
    demo: 'https://todoapp199.netlify.app/'
  },
  {
    id: 2,
    image: bootstrapport,
    title: 'Bootstrap',
    github: 'https://github.com/DimitarMicevski1/Bootstrap',
    demo: 'https://bootcampfe.netlify.app/'
  },
  {
    id: 3,
    image: tictactoe,
    title: 'Tic-Tac-Toe-React',
    github: 'https://github.com/DimitarMicevski1/Tic-Tac-Toe-React',
    demo: 'https://tictactoedm.netlify.app/'
  },
  // {
  //   id: 4,
  //   image: portfolio4,
  //   title: 'Project4',
  //   github: 'http://github.com',
  //   demo: 'https://dribbble.com/'
  // },
  // {
  //   id: 5,
  //   image: portfolio5,
  //   title: 'Project5',
  //   github: 'http://github.com',
  //   demo: 'https://dribbble.com/'
  // },
  // {
  //   id: 6,
  //   image: portfolio6,
  //   title: 'Project6',
  //   github: 'http://github.com',
  //   demo: 'https://dribbble.com/'
  // }
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