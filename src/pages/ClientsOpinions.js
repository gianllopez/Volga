import React, { Component } from 'react';
import { NotFound } from './';
import api from '../utils/api';
import { Opinion } from './components'
import './styles/ClientsOpinions.css';

class ClientsOpinions extends Component {

   state = {};

   render() {
      let { data } = this.state;
      return (
         !this.state.notfound ?
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
            </div> : <NotFound />
      );
   };

   componentDidMount() {
      let { username } = this.props.match.params;
      document.title = `${username} - Opiniones`;
      api.post('/validation/user-exists', { username })
         .catch(({ response }) => {
            if (response.status === 404) {
               this.setState({ notfound: true });
            };
         }).then(() => {
            api.get('/get-data/clients-opinions', { username })
               .then(({ data }) => this.setState({ data }));
         });
   };

};

export default ClientsOpinions;
