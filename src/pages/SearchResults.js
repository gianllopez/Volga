import React, { Component } from 'react';
import { ProductCard } from './components';

class SearchResult extends Component {
   render() {
      return (
         <div id="search-results-page">
            <h2>Resultados para: *palabra*</h2>
            <div id="results">
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </div>
         </div>

      );
   };
};

export default SearchResult;