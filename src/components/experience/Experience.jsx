import React from 'react';
import './experience.css';
import Typewriter from 'typewriter-effect';
import {FaSass, FaReact, FaNodeJs, FaHtml5} from 'react-icons/fa';
import {SiJavascript, SiPhp} from 'react-icons/si';
import {SiBootstrap, SiMongodb} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {IoLogoCss3} from 'react-icons/io';



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>
        <Typewriter
          options={{
            strings: ['My Experience'],
            autoStart: true,
            delay: 170,
            pauseFor: 3000,
            loop: true,
          }}
        />
      </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Technology</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaSass className='experience__details-icon' />
              <div>
                <h4>SCSS/SASS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>
          </div>
        </div>
        {/* ===== END OF FRONTEND ===== */}
        
        <div className="experience__backend">
          <h3>Back-End Technology</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
        {/* ===== END OF BACKEND ===== */}
      </div>
    </section>
  )
}

export default Experience