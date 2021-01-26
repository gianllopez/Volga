import React, { Component } from 'react';
import { ProductCard } from './components';
import './styles/SearchResults.css';

class SearchResult extends Component {
   render() {
      return (
         <div id="search-results-page">
            <div id="srp-header">
               <h2>Resultados que coinciden con: *palabra*</h2>
               <h4>Encontrados: 5</h4>
            </div>
            <div id="srp-results">
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