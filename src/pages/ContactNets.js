import React, { Component } from 'react';
import { ContactNetInput } from './components';
import './styles/ContactNets.css';

class ContactNets extends Component {
   render() {
      return (
         <form id="contactnets-form">
            <h2>
               Redes sociales para<br/>
               el contacto de tu tienda
            </h2>
            <ContactNetInput
               name="instagram"
               maxLength="30"
            />
            <ContactNetInput
               name="facebook"
               maxLength="50"
            />
            <ContactNetInput
               name="whatsapp"
               maxLength="15"
            />
            <ContactNetInput
               name="twitter"
               maxLength="15"
            />
            <ContactNetInput
               name="email"
               maxLength="100"
            />         
            <div id="sn-interaction-btns">
               <button>Omitir</button>
               <button>Continuar</button>
            </div>
         </form>
      );
   };
};

export default ContactNets;
