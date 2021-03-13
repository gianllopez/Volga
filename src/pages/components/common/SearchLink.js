import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import './styles/SearchLink.css';

function SearchLink(props) {

   const [error, setError] = useState(false);
   const history = useHistory();

   const showSearchModal = () => (
      swal({
         title: '¿Que deseas buscar?',
         content: (
            <div>
               <input placeholder="..." id="search-input" maxLength="50" />
               {error &&
                  <p id="blank-error">Debes rellenar el campo de búsqueda.</p>}
            </div>
         ),
         buttons: ['Cancelar', { text: 'Buscar', closeModal: false }],
         className: 'search-modal',
         closeOnClickOutside: false
      })
   );

   const searchRequest = event => {
      event.preventDefault();
      showSearchModal().then(search => {
         if (search) {
            let { value } = document.querySelector('input#search-input');
            if (value) {
               history.push({
                  pathname: '/search/results',
                  state: { query: value }});               
               swal.close();
            } else {
               setError(true);
               searchRequest();
            };
         };
      });
   };

   return (
      <a onClick={searchRequest} href="/">Buscar</a>
   );

};

export default SearchLink;