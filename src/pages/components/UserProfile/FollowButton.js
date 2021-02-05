import React from 'react';
import { CustomModal } from '..';
import api from '../../../utils/api';
import './styles/FollowButton.css';

function FollowButton (props) {

   const actionSubmit = () => {
      let btn = document.querySelector('#follow-btn');
      api.post('/follow', { user: props.user })
         .then(({ data }) => {
            if (data.action === 'create') {
               btn.classList.add('following');
               btn.textContent = 'Siguiendo';
            } else {
               btn.classList.remove('following');
               btn.textContent = 'Seguir';
            };
         })
         .catch(({ response }) => {
            if (response.status === 404) {
               CustomModal(<span>{ response.data[props.user] }</span>, [false, 'Entendido'])
                  .then(ok => ok && props.history.push('/'));
            };
         });
   };
   
   return (
      <button id="follow-btn" onClick={actionSubmit}>
         Seguir
      </button>
   );

};

export default FollowButton;