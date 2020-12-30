import React, { Component } from 'react';
import { ContactNetInput } from './components';
import './styles/ContactNets.css';

class ContactNets extends Component {
   render() {
      return (
         <form id="contactnets-form" onSubmit={this.submitHandler}>
            <h2>
               Redes sociales para<br/>
               el contacto de tu tienda
            </h2>
            <ContactNetInput
               name="instagram"
               maxLength="30"
               onChange={this.changeHandler}
            />
            <ContactNetInput
               name="facebook"
               maxLength="50"
               onChange={this.changeHandler}
            />
            <ContactNetInput
               name="whatsapp"
               maxLength="15"
               onChange={this.changeHandler}
            />
            <ContactNetInput
               name="twitter"
               maxLength="15"
               onChange={this.changeHandler}
            />
            <ContactNetInput
               name="email"
               maxLength="100"
               onChange={this.changeHandler}
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
