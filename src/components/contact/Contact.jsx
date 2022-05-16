import React, { useRef } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp, BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com'
import Typewriter from 'typewriter-effect';


const Contact = ({navRef}) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dm0edus', 'template_k1nvah5', form.current, 'C3toJ4__Oq_Bj94lW')
    
    e.target.reset();
  };

  return (
    <section id='contact' ref={navRef}>
      <h5>Get In Touch</h5>
      <h2>
        <Typewriter
          options={{
            strings: ['Contact Me'],
            autoStart: true,
            delay: 170,
            pauseFor: 3000,
            loop: true,
          }}
        />
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nhaatn1@gmail.com</h5>
            <a href="mailto:nhaatn1@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/nhaatn/" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>403-968-7981</h5>
            <a href="https://api.whatsapp.com/send?phone=14039687981" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary' id='form-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact