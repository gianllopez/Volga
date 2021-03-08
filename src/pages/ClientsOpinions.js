import React, { Component, Fragment } from 'react';
import { CustomMessage, Opinion, UserPageExists } from './components'
import api from '../utils/api';
import blankopinions from '../assets/ClientsOpinions/blank-opinions.png';
import './styles/ClientsOpinions.css';

class ClientsOpinions extends Component {

   state = {
      opinions: [],
      ...this.props.match.params
   };

   fetchOpinions = () => {
      api.get('/get-data/clients-opinions', { username: this.state.username })
         .then(({ data }) => {this.setState({ opinions: data })});
   };

   render() {
      let { username, opinions } = this.state;
      return (
         <UserPageExists onExists={this.fetchOpinions}>
            <div id="clients-opinions-page">
               {opinions.length ?
                  <Fragment>
                     <h2>Esto es lo que opinan de {username} sus clientes:</h2>
                     <div id="opinions-result">
                        {opinions.map((opinion, index) => 
                           <Opinion {...opinion} key={index}/>)}
                     </div>
                  </Fragment> :
                  <CustomMessage
                     msgimage={blankopinions}
                     message="Este usuario no tiene opiniones de clientes"/>}
            </div>
         </UserPageExists>
      );
   };

   componentDidMount() {      
      document.title = `${this.state.username} - Opiniones`;
   };

};

export default ClientsOpinions;

/* REVISADO Y NO HAY MÁS QUE RESUMIR: 2/02/2021 */