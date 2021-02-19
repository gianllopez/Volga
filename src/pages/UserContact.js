import React, { Component } from 'react';
import api from '../utils/api';
import { NotFound } from '.';
import { ContactLink, CustomModal, UserPageExists } from './components';
import './styles/UserContact.css';
import { Fragment } from 'react';

class UserContact extends Component {

   state = {
      username: this.props.match.params['username'],
      contact: {}
   };

   fetchContactWays = username => {
      api.get('/get-data/contact-networks', { username })
         .then(({ data }) => this.setState({ contact: {...data} }));
   };

   render() {
      let { username, contact } = this.state,
      contactways = Object.entries(contact);
      return (
         <UserPageExists componentProps={this.props} onExists={() => this.fetchContactWays(username)}>
            <div id="contact-form">
            {contactways.length !== 0 ? 
               <Fragment>
                  <h2>¿Por donde deseas contactar con {username}?</h2>
                  <div id="contact-ways">
                     {contactways.map((way, index) => (
                        <ContactLink
                        for={way[0]}
                        url={way[1]}
                        key={index}
                        />
                        ))}
                  </div>
               </Fragment> : <p>Hola</p>}
            </div>
         </UserPageExists>
      );
   };

   componentDidMount() {
      document.title = `${this.state.username} - Contacto`;
   };

};

export default UserContact;
