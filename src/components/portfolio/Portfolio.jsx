import React from 'react';
import './portfolio.css';
import NetflixIMG from '../../assets/netflix-clone.jpg';
import SimtIMG from '../../assets/simt.jpg';
import PortfolioIMG from '../../assets/portfolio-hero.jpg';
import Typewriter from 'typewriter-effect';


const data = [
  {
    id: 1,
    image: NetflixIMG,
    title: `Nhat's Netflix Clone`,
    techStack: `ReactJS, HTML5, CSS3, Firebase, TMDB API`,
    github: 'https://github.com/nhaatn/netflix-clone',
    demo: 'https://netflix-clone-2eae4.web.app/'
  },

  {
    id: 2,
    image: SimtIMG,
    title: `SAIT's Student Investment Management Trust`,
    techStack: `WordPress, Elementor`,
    // github: 'https://github.com',
    demo: 'https://www.thesimt.com/'
  },

  {
    id: 3,
    image: PortfolioIMG,
    title: 'My Portfolio',
    techStack: `ReactJS, HTML5, CSS3`,
    github: 'https://github.com/nhaatn/React-Portfolio',
    // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },

  // {
  //   id: 4,
  //   image: NetflixIMG,
  //   title: 'Figma dashboard UI kit',
  //   techStack: `ReactJS, HTML5, CSS3, Firebase, TMDB API`,
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  // },

  // {
  //   id: 5,
  //   image: NetflixIMG,
  //   title: 'Some random title for image 5',
  //   techStack: `ReactJS, HTML5, CSS3, Firebase, TMDB API`,
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  // },

  // {
  //   id: 6,
  //   image: NetflixIMG,
  //   title: 'Gamestop MOASS incoming',
  //   techStack: `ReactJS, HTML5, CSS3, Firebase, TMDB API`,
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  // },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>
        <Typewriter
          options={{
            strings: ['Portfolio'],
            autoStart: true,
            delay: 170,
            pauseFor: 3000,
            loop: true,
          }}
        />
      </h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, techStack, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <span className='tech__stack'>Tech Stack:</span>
                <h5 className="text-light">
                  {techStack}
                </h5>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio