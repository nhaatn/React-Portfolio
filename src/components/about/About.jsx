import React from 'react';
import './about.css';
import {SiFuturelearn} from 'react-icons/si';
import {MdCreate} from 'react-icons/md';
import {FaFish} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>
        <Typewriter
          options={{
            strings: ['About Me'],
            autoStart: true,
            delay: 170,
            pauseFor: 3000,
            loop: true,
          }}
        />
      </h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdCreate className='about__icon' />
              <h5>I love exploring and creating</h5>
            </article>

            <article className='about__card'>
              <SiFuturelearn className='about__icon' />
              <h5>I'm a lifelong learner</h5>
            </article>

            <article className='about__card'>
              <FaFish className='about__icon' />
              <h5>Self-proclaimed sushi connoisseur</h5>
            </article>
          </div>

          <p>
            I have recently graduated from the Web Development program at SAIT, through which I developed strong skills in data analysis and problem-solving. I am dedicated to perfecting my projects and have strong knowledge of UI/UX principles. I strive to design and build quality, intuitive, and robust websites with the goal of learning and improving my skills. Aside from coding, I enjoy playing basketball, video games, and the guitar.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About