import React, { Component, createContext } from 'react';
import Axios from 'axios';
import { ContactNetworkInput } from './components';
import './styles/ContactNetworks.css';

export const CNcontext = createContext({});

class ContactNetworks extends Component {
   
   state = {
      data: {
         instagram: '', facebook: '',
         whatsapp: '', twitter: '',
         email: ''
      },
      errors: {}   
   };

   changeHandler = ({target}) => {
      this.setState({
         ...this.state,
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      });
   };

   submitHandler = event => {
      event.preventDefault();
      // Axios.post('http:localhost:3000/api/v1/users/contact/', this.state.data)
      //    .then(response => {debugger})
   };
   
   render() {
      const contextContent = {
         changeHandler: this.changeHandler,
         errors: this.state.errors
      };
      return (
         <form id="user-contact-form" onSubmit={this.submitHandler}>
            <h2>
               Redes sociales para<br/>
               el contacto de tu tienda
            </h2>
            <CNcontext.Provider value={contextContent}>
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
            </CNcontext.Provider>
            <div id="contact-interaction-btns">
               <button>Omitir</button>
               <button>Continuar</button>
            </div>
         </form>
      );
   };
};

export default ContactNetworks;