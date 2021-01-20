import React, { Component, Fragment } from 'react';
import { Uploader, ButtonLoader, CustomModal } from './components';
import api from '../utils/api';
import userpphero from '../assets/UserProfilePicture/userpp-hero.svg';
import './styles/UserProfilePicture.css';

class UserProfilePicture extends Component {

   state = { picture: '', loading: false };

   uploadHandler = ({ target }) => this.setState({ picture: target.files[0] });

   submitHandler = event => {
      event.preventDefault();
      const sendRequest = () => {
         let form = new FormData();
         form.append('picture', this.state.picture)
         form.append('username', this.props.match.params['username']);
         debugger
         api.post('/profile-picture', form)
            .then(() => this.props.history.push(`${form.get('username')}/`))
      };
      if (!this.state.picture) {
         const content = (
            <Fragment>
               <p>
                  Vemos que no tienes pensado agregar una foto para
                  tu perfil. Esta es imprescindible para que tus
                  clientes te reconozcan.
               </p>
               <span>¿Deseas continuar así?</span>
            </Fragment>
         );
         CustomModal(content)
            .then(allowBlank => allowBlank && sendRequest());
      } else { sendRequest(); };

   };
   render() {
      return (
         <form id="userpp-form" encType="multipart/form-data" onSubmit={this.submitHandler}>
            <div id="userpp-form-header">
               <img src={userpphero} alt="userpp-hero" />
               <h1>Selecciona una foto para tu perfil</h1>
            </div>
            <Uploader isloaded={this.state.picture} uploadHandler={this.uploadHandler} />
            <div style={{ display: 'flex' }}>
               <ButtonLoader label="Omitir" />
               <ButtonLoader label="Continuar" />
            </div>
         </form>
      );
   };

};

export default UserProfilePicture;
