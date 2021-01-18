import React, { Component, createContext, Fragment } from 'react';
import api from '../utils/api';
import { ContactNetworkInput, ButtonLoader, ConfirmationModal } from './components';
import { noBlankValidator } from '../utils/validators'
import './styles/ContactNetworks.css';
import swal from '@sweetalert/with-react';

export const CNcontext = createContext({});

class ContactNetworks extends Component {

   state = {
      data: {
         instagram: '', facebook: '',
         whatsapp: '', twitter: '',
         email: '', user: this.props.match.params['username']
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
         const nextpath = `/${this.state.data.user}/tags`;
         api.post('/contact/', this.state.data)
            .then(() => {
               this.props.history.push(nextpath)
            })
            .catch(({ response }) => {
               this.setState({ loading: false, errors: response.data });
               if (response.data.user) {
                  swal({
                     title: 'Error en el registro',
                     icon: 'error',
                     content: <p className="swal-modal-text">{response.data.user}</p>,
                     dangerMode: true
                  }).then(ok => ok && this.props.history.push(nextpath));
               };
            });
      };
      let { isValid } = noBlankValidator(this.state.data);
      if (!isValid) {
         let content = (
            <Fragment>
               <p>
                  Estas redes facilitan el contacto entre tú y tus clientes.
                  Recomendamos que llenes las que te sugerimos.
               </p>
               <span>¿Deseas continuar así?</span>
            </Fragment>
         );
         ConfirmationModal(content).then(allowBlank => allowBlank && sendRequest());
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
