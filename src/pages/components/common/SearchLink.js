import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import './styles/SearchLink.css';

class SearchLink extends Component {

   state = { blankerror: false };

   showSearchModal = () => (
      swal({
         title: '¿Que deseas buscar?',
         buttons: ['Cancelar', {
            text: 'Buscar',
            closeModal: false
         }],
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
            if (!value) {
               this.setState({ blankerror: true }, () => this.searchRequest());
            };
            console.log(value);
         };
      });
   };

   render = () => <a onClick={this.searchRequest}>Buscar</a>;

};

export default SearchLink;