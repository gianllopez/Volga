import React, { Component } from 'react';
import { ContactLink } from './components';
import './styles/ShopContact.css';

class ShopContact extends Component {
   render() {
      return (
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
      );
   };
};

export default ShopContact;
