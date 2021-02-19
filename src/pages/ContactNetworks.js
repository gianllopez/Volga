import React, { Component, createContext, Fragment } from 'react';
import api from '../utils/api';
import { ContactNetworkInput, ButtonLoader, CustomModal, UserPageExists } from './components';
import { noBlankValidator } from '../utils/validators'
import './styles/ContactNetworks.css';

export const CNcontext = createContext({});

class ContactNetworks extends Component {

   state = {
      username: this.props.match.params['username'],
      data: {
         instagram: '', facebook: '',
         whatsapp: '', twitter: '',
         email: '', linkedin: ''
      },
      loading: false,
      errors: {}
   };

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      });
   };


   fetchRequest = () => {
      let { username, data } = this.state;
      this.setState({ loading: true });
      let nextpath = `/${username}/profile-picture`;
      api.post('/contact', data)
         .then(() => this.props.history.push(nextpath))
         .catch(errors => {
            this.setState({ loading: false });
            let { response, message } = errors;
            if (message === 'Network Error') {
               const content = (
                  <Fragment>
                     <p>Error en el registro</p>
                     <span>
                        Aségurate de estar conectado a internet.
                           </span>
                  </Fragment>
               );
               CustomModal(content, [false, 'Entendido'])
            } else {
               if (response.data.user) {
                  const content = (
                     <Fragment>
                        <p>Error en el registro</p>
                        <span>{response.data.user}</span>
                     </Fragment>
                  );
                  CustomModal(content, [false, 'Entendido'])
                     .then(ok => ok && this.props.history.push(nextpath));
               };
            };
         });
   }

   submitHandler = event => {
      event.preventDefault();
      let { isValid } = noBlankValidator(this.state.data);
      if (isValid) {
         this.fetchRequest();
      } else {
         let content = (
            <Fragment>
               <p>
                  Estas redes facilitan el contacto entre tú y tus clientes.
                  Recomendamos que llenes las que te sugerimos.
               </p>
               <span>¿Deseas continuar así?</span>
            </Fragment>
         );
         CustomModal(content)
            .then(allowBlank => allowBlank && this.fetchRequest());
      };
   };

   keyDownHandler = event => event.keyCode === 13 && event.preventDefault();

   render() {
      const contextContent = {
         changeHandler: this.changeHandler,
         errors: this.state.errors
      };
      return (
         <UserPageExists userParam={this.state.username}>
            <form id="user-contact-form" onSubmit={this.submitHandler} onKeyDown={this.keyDownHandler}>
               <h2>Redes para el contacto<br />con tus clientes</h2>
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
                  <ContactNetworkInput
                     name="linkedin"
                     maxLength="30"
                  />
               </CNcontext.Provider>

               <ButtonLoader isloading={this.state.loading} />

            </form>
         </UserPageExists>
      );
   };

   componentDidMount() {
      document.title = `${this.state.username} - Redes de contacto`;
   };
};

export default ContactNetworks;
