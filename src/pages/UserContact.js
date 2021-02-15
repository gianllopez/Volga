import React, { Component } from 'react';
import api from '../utils/api';
import { NotFound } from '.';
import { ContactLink, CustomModal } from './components';
import './styles/UserContact.css';

class ShopContact extends Component {

   state = {};

   render() {
      let contacts = Object.entries(this.state.data || {});
      return (
         !this.state.notfound ?
            <div id="contact-form">
               <h2>
                  ¿Por donde deseas contactar con *shop*?
               </h2>
               <div id="contact-ways">
                  {contacts.map((contact, index) => (
                     <ContactLink
                        for={contact[0]}
                        url={contact[1]}
                        key={index}
                     />
                  ))}
               </div>
            </div> : <NotFound />
      );
   };

   componentDidMount() {
      let { username } = this.props.match.params;
      document.title = `${username} - Contacto`;
      api.post('/validation/user-exists', { username })
         .catch(({ response }) => {
            if (response.status === 404) {
               this.setState({ notfound: true });
            };
         }).then(() => {
            api.get('/get-data/contact-networks', { username })
               .then(({ data }) => this.setState({ data }))
               .catch(({ response }) => {
                  CustomModal(<span>{response.data.user}</span>, [false, 'Entendido'])
                     .then(ok => ok && this.props.history.push(`/users/${username}`));
               })
         });
   };

};

export default ShopContact;
