import React, { Component } from 'react';
import { NotFound } from './';
import api from '../utils/api';
import { Opinion, UserPageExists } from './components'
import './styles/ClientsOpinions.css';

class ClientsOpinions extends Component {

   state = {
      username: this.props.match.params['username']
   };

   fetchOpinions = () => {
      api.get('/get-data/clients-opinions', { username: this.state.username })
         .then(({ data: { opinions } }) => {this.setState({ opinions })})
   };

   render() {
      let { username, opinions } = this.state;
      return (
         <UserPageExists userParam={username} onExists={this.fetchOpinions}>
            <div id="clients-opinions-page">
               <h2>Esto es lo que opinan de {username} sus clientes:</h2>
               <div id="clients-opinions">
                  {opinions && opinions.map((opinion, index) => 
                     <Opinion {...opinion} key={index} />)}
               </div>
            </div>
         </UserPageExists>
      );
   };

   componentDidMount() {      
      document.title = `${this.state.username} - Opiniones`;
   };

};

export default ClientsOpinions;
