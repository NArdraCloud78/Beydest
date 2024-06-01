import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import contact from '../Assist/contact.png';
import './contactimage.css'; 

function ContactImage() {
  return (
    <div className="contact-image">
      <img width={250} src={contact} alt="Contact" />
      <Link to={'/Contact'}>
        <p className="overlay-text">Contact Us</p>
      </Link>
    </div>
  );
}

export default ContactImage;
