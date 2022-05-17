import React from 'react';
import { useState } from 'react';

import './nav.css';

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BsBook, BsCodeSlash} from 'react-icons/bs';
import {BiMessageDetail} from 'react-icons/bi';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#top');
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 100);
  //   });
  // }, []); 

  // const scrollEffect = () => {
  //   if(window.scrollY >= 100) {
  //     setScroll(true)
  //   } else {
  //     setScroll(false)
  //   }
  // }

  // window.addEventListener('scroll', scrollEffect);
  // activeNav === '#about'

  return (
    <nav>
      <a 
        href="#top" 
        onClick={() => setActiveNav('#top')} 
        className={activeNav === '#top' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>

      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsCodeSlash />
      </a>

      <a 
        href="#portfolio" 
        onClick={() => setActiveNav('#portfolio')} 
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BsBook />
      </a>

      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageDetail />  
      </a>
    </nav>
  )
}

export default Nav