import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



const App = () => {
  const topRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const portfolioRef = React.useRef(null);
  const contactRef = React.useRef(null);
  return (
    <>
      <Header />
      <Nav top={topRef} about={aboutRef} experience={experienceRef} portfolio={portfolioRef} contact={contactRef}/>
      <About navRef={aboutRef} />
      <Experience navRef={experienceRef} />
      <Portfolio navRef={portfolioRef} />
      <Contact navRef={contactRef} />
      <Footer />
    </>
  )
}

export default App