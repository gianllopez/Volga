import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/Footer.css';

function MySocialContact() {
   const CONTACT = ['twitter', 'github', 'facebook', 'instagram'];
   return (
      CONTACT.map((cn, index) => 
         <a target="_blank" rel="noopener noreferrer" key={index}
            href={`https://${cn}.com/${cn !== 'facebook' ? 'gianlop3z' : 'therealgoat01'}`}>
            <i className={`fab fa-${cn}-square`}/>
         </a>)
   );
};

function Footer(props) {
   return (
      <div id="footer-wrapper">
         <section id="my-social-contact">
            <MySocialContact/>
         </section>
         <div id="contact-me">
            <p>lopezarizagianlucas@gmail.com</p>
            <p>+57 302-223-6578</p>
            <p>gianlucasla@hotmail.com</p>
         </div>
         <p id="copyright">Volga by Gian López © 2021</p>
      </div>
   );
};

export default withRouter(Footer);
