import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; 2022 Nhat Nguyen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer