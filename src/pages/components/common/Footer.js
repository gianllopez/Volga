import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer(props={}) {
   return (
      <div id="footer-wrapper">
         <section id="my-social-contact">
            <Link to="">
               <i className="fab fa-twitter-square"/>
            </Link>
            <Link to="">
               <i className="fab fa-github-square"/>
            </Link>
            <Link to="">
               <i className="fab fa-facebook-square"/>
            </Link>
            <Link to="">
               <i className="fab fa-instagram-square"/>
            </Link>
         </section>
         <div id="contact-me">
            <p>lopezarizagianlucas@gmail.com</p>
            <p>gianlucasla@hotmail.com</p>
            <p>+57 302-223-6578</p>
         </div>
         <p id="copyright">Volga by Gian López © 2020</p>
      </div>
   );
}

export default Footer;
