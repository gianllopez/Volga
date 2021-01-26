import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import './styles/SearchLink.css';

class SearchLink extends Component {

   state = {
      blankerror: false,
      redirect: false,
      query: ''
   };

   showSearchModal = () => (
      swal({
         title: '¿Que deseas buscar?',
         buttons: ['Cancelar', { text: 'Buscar', closeModal: false }],
         content: (
            <div>
               <input placeholder="..." id="search-input" />
               {this.state.blankerror && (
                  <p id="blank-error">Debes rellenar el campo de búsqueda.</p>
               )}
            </div>
         ),
         className: 'search-modal',
         closeOnClickOutside: false
      })
   );

   searchRequest = () => {
      this.showSearchModal().then(search => {
         if (search) {
            let { value } = document.querySelector('input#search-input');
            if (value) {
               this.setState({ redirect: true, query: value }, () => {
                  this.setState({ redirect: false }, swal.close);
               });
            } else {
               this.setState({ blankerror: true }, this.searchRequest);
            };
         };
      });
   };

   render = () => this.state.redirect ?
      <Redirect to={{
         pathname: "/search/results/",
         state: { query: this.state.query }
      }} /> :
      < a onClick={this.searchRequest} > Buscar</a >;

};

export default SearchLink;