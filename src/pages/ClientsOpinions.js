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
         .then(({ data }) => this.setState({ data }))
   };

   render() {
      let { username, data } = this.state;
      return (
         <UserPageExists userParam={username} onExists={this.fetchOpinions}>
            <div id="clients-opinions-page">
               <h2>Esto es lo que opinan de *user* sus clientes:</h2>
               <div id="clients-opinions">
                  {data && data.map((opinion, index) => (
                     <Opinion
                        from={opinion.from}
                        date={opinion.date}
                        comment={opinion.comment}
                        key={index}
                     />
                  ))}

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
