import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuthenticated } from '../../../utils/routing-tools';
import api from '../../../utils/api';
import favIcon from '../../../assets/common/heart.svg';
import filledFavIcon from '../../../assets/common/filled-heart.svg';
import './styles/FavButton.css';

function FavButton({ product, withtext, ...rest}) {

   const [isfav, setIsfav] = useState(rest.isfav);
   const history = useHistory();

   const fetchFav = event => {
      event.stopPropagation();
      if (isAuthenticated()) {
         api.post('/product-fav', { product })
            .then(({ data }) => setIsfav(data.isfav));
      } else {
         history.push('/login');
      };
   };

   return (
      !withtext ?
         <img
            className="fav-icon"
            src={isfav ? filledFavIcon : favIcon}
            alt="fav-icon"
            onClick={fetchFav}
         /> :
         <button
            id="fav-btn"
            onClick={fetchFav}
            className={isfav ? "btn-is-fav" : "btn-no-fav"}>
            {!isfav ?
               "Añadir a favoritos" :
               "Eliminar de favoritos"}
         </button>
   );

};

export default FavButton;

// Terminado, nada más que revisar...