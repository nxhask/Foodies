import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d4ug0gj', 'template_w7dslul', form.current, 'VfGeiQdpgeaVnxj4Q')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <form className='form' ref={form} onSubmit={sendEmail}>
        <div className='cbox'>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default About