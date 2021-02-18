import React, { Component, Fragment } from 'react';
import { Uploader, ButtonLoader, CustomModal } from './components';
import api from '../utils/api';
import userpphero from '../assets/UserProfilePicture/userpp-hero.svg';
import volgalogo from '../assets/common/logo.svg';
import './styles/UserProfilePicture.css';

class UserProfilePicture extends Component {

   state = { picture: '', loading: false };

   uploadHandler = ({ target }) => this.setState({ picture: target.files[0] });

   submitHandler = event => {
      event.preventDefault();
      const sendRequest = () => {
         this.setState({ loading: true }, () => {
            let binaries = new FormData();
            binaries.append('picture', this.state.picture)
            api.post('/profile-picture', binaries)
               .then(({data}) => {
                  localStorage.setItem('globudata', JSON.stringify(data))
               });
         });
      };
      if (!this.state.picture) {
         CustomModal(
            <Fragment>
               <p>
                  Vemos que no tienes pensado agregar una foto para
                  tu perfil. Esta es imprescindible para que tus
                  clientes te reconozcan.
               </p>
               <span>¿Deseas continuar así?</span>
            </Fragment>
         ).then(allowBlank => allowBlank && sendRequest());
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
            <ButtonLoader label="Continuar" isloading={this.state.loading}/>
         </form>
      );
   };

   componentDidMount() {
      let { username } = this.props.match.params;
      document.title = `${username} - Foto de perfil`;
   };

};

export default UserProfilePicture;
