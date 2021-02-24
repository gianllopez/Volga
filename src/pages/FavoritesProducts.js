import React, { Component, Fragment } from 'react';
import { CustomMessage, UserProduct } from './components/';
import api from '../utils/api';
import './styles/FavoritesProducts.css';
import nofavsicon from '../assets/FavoritesProducts/nofavs.png';

class FavoritesProducts extends Component {

   state = { favorites: [] };

   render() {
      let { favorites } = this.state,
      hasfavs = favorites.length !== 0;

      return (
         <div id="favorites-products">
            {hasfavs && <h2>Estos son tus productos favoritos:</h2>}
            <div>
               {hasfavs ? 
                  favorites.map((result, index) => 
                     <UserProduct data={result} key={index} />) :
                  <CustomMessage
                     msgimage={nofavsicon}
                     message="No tienes productos favoritos"
                  />}
            </div>
         </div>
      );
   };

   componentDidMount() {
      document.title = 'Mis favoritos';
      api.get('/get-data/favorites-products')
         .then(({ data }) => {
            this.setState({ ...data })
         })
   };
};

export default FavoritesProducts;
