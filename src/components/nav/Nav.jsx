import React from "react";
import { Link } from "react-scroll/modules";

import "./nav.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBook, BsCodeSlash } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";


const Nav = () => {
  // const [activeNav, setActiveNav] = useState();
  /* <a 
    href="#top" 
    onClick={() => setActiveNav('#top')} 
    className={activeNav === '#top' ? 'active' : ''}
  >
    <AiOutlineHome />
  </a>
    */

  return (
    <nav>
      {/* HOME */}
      <Link
        to="top"
        spy={true}
        activeClass="active"
        smooth={true}
        duration={10}
      >
        <AiOutlineHome />
      </Link>

      {/* ABOUT */}
      <Link
        to="about"
        spy={true}
        activeClass="active"
        smooth={true}
        duration={10}
      >
        <AiOutlineUser />
      </Link>

      {/* EXPERIENCE */}
      <Link
        to="experience"
        spy={true}
        activeClass="active"
        smooth={true}
        duration={10}
      >
        <BsCodeSlash />
      </Link>

      {/* PORTFOLIO */}
      <Link
        to="portfolio"
        spy={true}
        activeClass="active"
        smooth={true}
        duration={10}
      >
        <BsBook />
      </Link>

      {/* CONTACT */}
      <Link
        to="contact"
        spy={true}
        activeClass="active"
        smooth={true}
        duration={10}
      >
        <BiMessageDetail />
      </Link>
    </nav>
  );
};

export default Nav;
