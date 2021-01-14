import React, { Component } from 'react';
import { ContactNetworkInput } from './components';
import './styles/ContactNetworks.css';

class ContactNetworks extends Component {
   render() {
      return (
         <form id="user-contact-form">
            <h2>
               Redes sociales para<br/>
               el contacto de tu tienda
            </h2>
            <ContactNetworkInput
               name="instagram"
               maxLength="30"
            />
            <ContactNetworkInput
               name="facebook"
               maxLength="50"
            />
            <ContactNetworkInput
               name="whatsapp"
               maxLength="15"
            />
            <ContactNetworkInput
               name="twitter"
               maxLength="15"
            />
            <ContactNetworkInput
               name="email"
               maxLength="100"
            />         
            <div id="contact-interaction-btns">
               <button>Omitir</button>
               <button>Continuar</button>
            </div>
         </form>
      );
   };
};

export default ContactNetworks;
