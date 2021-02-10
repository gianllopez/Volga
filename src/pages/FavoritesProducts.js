import React, { Component } from 'react';
import { ShopProduct } from './components/';
import api from '../utils/api';
import './styles/FavoritesProducts.css';

class FavoritesProducts extends Component {
   
   state = { results: [] };

   render() {
      let { results } = this.state;
      return (
         <div id="favorites-products">
            <h2>Estos son tus productos favoritos:</h2>
            <div> 
               {results.map((result, index) => (
                  <ShopProduct product_data={result}/>
               ))}
            </div>
         </div>
      );
   };

   componentDidMount() {
      api.get('/get-data/favorites-products')
         .then(({ data }) => {
            this.setState({ results: data })
         })
   };
};

export default FavoritesProducts;
