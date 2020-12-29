import React, { Component, Fragment } from 'react';
import { NavBar, ContactLink, Footer } from './components';
import './styles/ShopContact.css';

class ShopContact extends Component {
   render() {
      return (
         <Fragment>
            <NavBar/>
            <div id="contact-form">
               <h2>
                  ¿Por donde deseas contactar con *shop*?
               </h2>
               <div id="contact-ways">
                  <ContactLink for="instagram"/>
                  <ContactLink for="facebook"/>
                  <ContactLink for="whatsapp"/>
                  <ContactLink for="twitter"/>
                  <ContactLink for="email"/>
                  <ContactLink for="pinterest"/>
               </div>
            </div>
            <Footer/>
         </Fragment>
      );
   };
};

export default ShopContact;
