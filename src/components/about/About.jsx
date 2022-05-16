import React from 'react';
import './about.css';
import {SiFuturelearn} from 'react-icons/si';
import {MdCreate} from 'react-icons/md';
import {FaFish} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';


const About = ({ navRef }) => {
  return (
    <section id='about' ref={navRef}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium perspiciatis, tempore magni ipsam, alias dolore omnis rem ratione sed recusandae delectus tenetur! Illum tenetur, distinctio eligendi laborum iste voluptate totam delectus. Dolorem repellat quo tenetur dolor similique aliquid nostrum libero aperiam, odio quisquam reprehenderit et culpa? Aperiam, nisi amet.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About