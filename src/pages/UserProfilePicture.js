import React, { Component } from 'react';
import { Uploader, ButtonLoader } from './components';
import api from '../utils/api';
import userpphero from '../assets/UserProfilePicture/userpp-hero.svg';
import './styles/UserProfilePicture.css';

class UserProfilePicture extends Component {

   state = { picture: {}, loading: false };

   uploadHandler = ({ target }) => this.setState({ picture: target.files[0] });

   submitHandler = event => {
      event.preventDefault();
      let form = new FormData();
      form.append('picture', this.state.picture)
      form.append('username', this.props.match.params['username']);
      api.post('/profile-picture', form)
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
