import React, { Component } from 'react';
import { Opinion } from './components'
import './styles/ClientsOpinions.css';

class ClientsOpinions extends Component {
   render() {
      return (
         <div id="clients-opinions-page">
            <h2>Esto es lo que opinan de *user* sus clientes:</h2>
            <div id="clients-opinions">
               <Opinion />
               <Opinion />
               <Opinion />
               <Opinion />
               <Opinion />
               <Opinion />
               <Opinion />
               <Opinion />
               <Opinion />
               <Opinion />
            </div>
         </div>
      );
   };
};

export default ClientsOpinions;
