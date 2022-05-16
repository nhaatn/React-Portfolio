import React from 'react';
import { useState, useEffect} from 'react';

import './nav.css';

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BsBook, BsCodeSlash} from 'react-icons/bs';
import {BiMessageDetail} from 'react-icons/bi';


function isInViewport(element) {
  const rect = element.current.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


const Nav = ({ top, about, experience, portfolio, contact }) => {
  const [activeNav, setActiveNav] = useState('#top');
  const [highlightTop, setHighlightTop] = useState(false);
  const [highlightAbout, setHighlightAbout] = useState(false);
  const [highlightExperience, setHighlightExperience] = useState(false);
  const [highlightPortfolio, setHighlightPortfolio] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!isInViewport(about) && !isInViewport(experience) && !isInViewport(portfolio) && !isInViewport(contact)) {
        setHighlightTop(true)
      } else {
        setHighlightTop(false)
      }
      if (isInViewport(about)) {
        setHighlightAbout(true)
      } else {
       setHighlightAbout(false)
      }
      if (isInViewport(experience)) {
        setHighlightExperience(true)
      } else {
        setHighlightExperience(false)
      }
      if (isInViewport(portfolio) && !isInViewport(experience)) {
        setHighlightPortfolio(true)
      } else {
        setHighlightPortfolio(false)
      }
      if (isInViewport(contact)) {
        setHighlightContact(true)
      } else {
        setHighlightContact(false)

      }
    });
  }, []);
  

  return (
    <nav>
      <a href="#top" onClick={() => setActiveNav('#top')} className={highlightTop ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={highlightAbout ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={highlightExperience ? 'active' : ''}><BsCodeSlash /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={highlightPortfolio ? 'active' : ''}><BsBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={highlightContact ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav