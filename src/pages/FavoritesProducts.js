import React, { Component } from 'react';
import { UserProduct } from './components/';
import api from '../utils/api';
import './styles/FavoritesProducts.css';

class FavoritesProducts extends Component {

   state = { favorites: [] };

   render() {
      let { favorites } = this.state;
      return (
         <div id="favorites-products">
            <h2>Estos son tus productos favoritos:</h2>
            <div>
               {favorites.map((result, index) => (
                  <UserProduct data={result} />
               ))}
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
