import React, { Component } from 'react';
import api from '../utils/api';
import './styles/FavoritesProducts.css';

class FavoritesProducts extends Component {
   
   render() {
      return (
         <div id="favorites-products">
            <h2>Estos son tus productos favoritos:</h2>
         </div>
      );
   };

   componentDidMount() {
      api.get('/get-data/favorites-products')
      // .then(())
   };
};

export default FavoritesProducts;
