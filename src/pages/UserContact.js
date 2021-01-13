import React, { Component } from 'react';
import { ContactInput } from './components';
import './styles/UserContact.css';

class UserContact extends Component {
   render() {
      return (
         <form id="user-contact-form">
            <h2>
               Redes sociales para<br/>
               el contacto de tu tienda
            </h2>
            <ContactInput
               name="instagram"
               maxLength="30"
            />
            <ContactInput
               name="facebook"
               maxLength="50"
            />
            <ContactInput
               name="whatsapp"
               maxLength="15"
            />
            <ContactInput
               name="twitter"
               maxLength="15"
            />
            <ContactInput
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

export default UserContact;
