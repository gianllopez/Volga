import React, { Component, createContext } from 'react';
import Axios from 'axios';
import { ContactNetworkInput, ButtonLoader } from './components';
import { noBlankValidator } from '../utils/validators'
import './styles/ContactNetworks.css';
import swal from '@sweetalert/with-react';

export const CNcontext = createContext({});

class ContactNetworks extends Component {

   state = {
      data: {
         instagram: '', facebook: '',
         whatsapp: '', twitter: '',
         email: '', token: localStorage.getItem('user-token')
      },
      loading: false,
      errors: {}
   };

   changeHandler = ({ target }) => {
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
      const sendRequest = () => {
         this.setState({ loading: true });
         Axios.post('http://127.0.0.1:8000/api/v1/users/contact/', this.state.data)
            .catch(({ response }) => this.setState({
               loading: false,
               errors: response.data
            }));
      };
      let { isValid } = noBlankValidator(this.state.data);
      if (!isValid) {
         swal({
            className: 'blank-confimation',
            content: (
               <p>
                  Estas redes facilitan el contacto entre tú y tus clientes.
                  Recomendamos que llenes las que te sugerimos.
                  <span>
                     ¿Deseas continuar así?
                  </span>
               </p>
            ),
            buttons: ['No', 'Si'],
            dangerMode: true
         }).then(allowBlank => {
            if (allowBlank) { sendRequest(); };
         })
      } else { sendRequest(); };
   };

   render() {
      const contextContent = {
         changeHandler: this.changeHandler,
         errors: this.state.errors
      };
      return (
         <form id="user-contact-form" onSubmit={this.submitHandler}>
            <h2>
               Redes útiles para<br />
               el contacto con tus clientes
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
                  type="email"
               />
            </CNcontext.Provider>
            <div id="contact-interaction-btns">
               <button>Omitir</button>
               <ButtonLoader isloading={this.state.loading} style={{ margin: 0 }} />
            </div>
         </form>
      );
   };
};

export default ContactNetworks;
