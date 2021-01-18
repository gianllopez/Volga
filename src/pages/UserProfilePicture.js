import React, { Component } from 'react';
import { Uploader, ButtonLoader } from './components';
import userpphero from '../assets/UserProfilePicture/userpp-hero.svg';
import './styles/UserProfilePicture.css';

class UserProfilePicture extends Component {
   render() {
      return (
         <form id="userpp-form" encType="multipart/form-data">
            <div id="userpp-form-header">
               <img src={userpphero} alt="userpp-hero" />
               <h1>Selecciona una foto para tu perfil</h1>
            </div>
            <Uploader isLoaded={false} />
            <div style={{ display: 'flex' }}>
               <ButtonLoader label="Omitir" />
               <ButtonLoader label="Continuar" />
            </div>
         </form>
      );
   };

};

export default UserProfilePicture;
