import React, { Component } from 'react';
import api from '../utils/api';
import { ContactLink, CustomMessage, UserPageExists } from './components';
import nocontacthero from '../assets/UserContact/no-contact-hero.png';
import './styles/UserContact.css';
import { Fragment } from 'react';

class UserContact extends Component {

   state = {
      username: this.props.match.params['username'],
      contact: {}
   };

   fetchContactWays = username => {
      api.get('/get-data/contact-networks', { username: this.state.username })
         .then(({ data }) => this.setState({ contact: {...data} }));
   };

   render() {
      let { username, contact } = this.state,
      contactways = Object.entries(contact);
      return (
         <UserPageExists userParam={username} onExists={this.fetchContactWays}>
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
               </Fragment> : <CustomMessage msgimage={nocontacthero}
                             message="Este usuario no registró redes de contacto."/>}
            </div>
         </UserPageExists>
      );
   };

   componentDidMount() {
      document.title = `${this.state.username} - Contacto`;
   };

};

export default UserContact;
