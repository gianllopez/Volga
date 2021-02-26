import React, { Component, Fragment } from 'react';
import { Uploader, ButtonLoader, CustomModal, UserPageExists } from './components';
import api from '../utils/api';
import userpphero from '../assets/UserProfilePicture/userpp-hero.svg';
import './styles/UserProfilePicture.css';

class UserProfilePicture extends Component {

   state = {
      username: this.props.match.params['username'],
      picture: '', loading: false,
      ...this.props.location.state
   };

   uploadHandler = ({ target }) => this.setState({ picture: target.files[0] });

   submitHandler = event => {
      event.preventDefault();
      let { username, picture } = this.state;
      const sendRequest = () => {
         this.setState({ loading: true }, () => {
            let binaries = new FormData();
            binaries.append('picture', picture)
            api.post('/profile-picture', binaries)
               .then(({status}) => {
                  if (status === 201) {
                     this.props.history.push({
                        pathname: `/users/${username}`,
                        state: { exists: true }
                     });
                  };
               });
         });
      };
      if (!picture) {
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
      let { exists, username } = this.state;
      return (
         <UserPageExists userParam={!exists && username}>
            <form id="userpp-form" encType="multipart/form-data" onSubmit={this.submitHandler}>
               <div id="userpp-form-header">
                  <img src={userpphero} alt="userpp-hero" />
                  <h1>Selecciona una foto para tu perfil</h1>
               </div>
               <Uploader isloaded={this.state.picture} uploadHandler={this.uploadHandler} />
               <ButtonLoader label="Continuar" isloading={this.state.loading}/>
            </form>
         </UserPageExists>
      );
   };

   componentDidMount() {
      document.title = `${this.state.username} - Foto de perfil`;
   };

};

export default UserProfilePicture;
