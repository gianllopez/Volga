import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ModalDisplayer } from '..';
import api from '../../../utils/api';
import { isAuthenticated } from '../../../utils/routing-tools';
import './styles/FollowButton.css';

function FollowButton(props) {

   const [isauth] = useState(isAuthenticated());

   const history = useHistory();

   const favAnimation = following => {
      if (isauth) {
         let btn = document.querySelector('.follow-btn');
         if (following) {
            btn.classList.add('following');
            btn.textContent = 'Siguiendo';
         } else {
            btn.classList.remove('following');
            btn.textContent = 'Seguir';
         };
      };
   };

   const favSubmit = () => {
      if(isauth) {
         api.post('/follow', { user: props.user })
            .then(({ data }) => favAnimation(data.following))
            .catch(({ response }) => {
               if (response.status === 404) {
                  ModalDisplayer({
                     type: 'CUSTOM',
                     title: 'Error',
                     message: response.data[props.user]
                  }).then(() => history.push('/'));
               };
            }); 
      } else {
         history.push('/login');
      };
   };

   useEffect(() => favAnimation(props.following && 'following'));

   return (
      <button className="follow-btn" onClick={favSubmit}>
         Seguir
      </button>
   );

};

export default FollowButton;

// Terminado, nada más que revisar...