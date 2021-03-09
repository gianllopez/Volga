import React, { Component } from 'react';
import { Uploader, ButtonLoader,
         UserPageExists, ModalDisplayer } from './components';
import api from '../utils/api';
import userpphero from '../assets/UserProfilePicture/userpp-hero.svg';
import './styles/UserProfilePicture.css';
import { imagesFormat } from '../utils/validators';

class UserProfilePicture extends Component {

   state = {
      picture: '', loading: false,
      ...this.props.match.params
   };

   uploadHandler = ({ target }) => {
      let validFormat = imagesFormat(target.files);
      if (validFormat) {
         this.setState({ picture: target.files[0] })
      };
   };

   uploadRedirect = () => {
      let redirectcnf = {
         pathname: `/users/${this.state.username}`,
         state: { exists: true }
      };
      this.props.history.push(redirectcnf);
   };
   
   uploadRequest = () => {
      let binaries = new FormData()
      binaries.append('picture', this.state.picture)
      api.post('/profile-picture', binaries)
         .then(({ data }) => {
            localStorage.setItem('uiprev', JSON.stringify(data));
            this.uploadRedirect();
         });
   };

   submitHandler = event => {
      event.preventDefault();
      if (!this.state.picture) {
         ModalDisplayer({
            type: 'CUSTOM',
            title: `Vemos que no tienes pensado agregar una foto para
                    tu perfil. Esta es imprescindible para que tus clientes te reconozcan.`,
            message: '¿Deseas continuar así?',
            buttons: [false, 'Si, continuar']}).then(cont => cont && this.uploadRedirect())
      } else {
         this.setState({ loading: true }, this.uploadRequest);
      };
   };

   render() {
      return (
         <UserPageExists>
            <form id="userpp-form" onSubmit={this.submitHandler}>
               <div id="userpp-form-header">
                  <img src={userpphero} alt="profile-pic-hero" />
                  <h1>Selecciona una foto para tu perfil</h1>
               </div>
               <Uploader
                  isloaded={this.state.picture}
                  onUpload={this.uploadHandler} />
               <ButtonLoader
                  label="Continuar"
                  isloading={this.state.loading} />
            </form>
         </UserPageExists>
      );
   };

   componentDidMount() {
      document.title = `${this.state.username} - Foto de perfil`;
   };

};

export default UserProfilePicture;

/* REVISADO Y NO HAY MÁS QUE RESUMIR: 02/02/2021 */