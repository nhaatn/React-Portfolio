import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/nhaatn/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/nhaatn" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials