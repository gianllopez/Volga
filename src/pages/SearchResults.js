import React, { Component, Fragment } from 'react';
import { ShopProduct } from './components';
import loupeicon from '../assets/SearchResults/loupe-icon.svg';
import './styles/SearchResults.css';
import api from '../utils/api';

class SearchResult extends Component {

   state = {};

   render() {
      let { query, results } = this.state;
      return (
         <div id="search-results-page">
               {this.state.query ? (
                  <Fragment>   
                     <div id="srp-header">
                        <h2>Resultados para "{query}"</h2>
                        <h4>Encontrados: {results ? results.length : 0}</h4>
                     </div>
                     <div id="srp-results">
                        {results ? (
                           results.map((result, index) => (
                              <ShopProduct
                                 product_data={result}
                                 key={index}
                                 history={this.props.history}
                              />
                           ))
                        ) : (<p id="blank-results">
                              No se ha encontrado un producto
                              que coincida con tu consulta.
                             </p>)}
                     </div>
                  </Fragment>) : (
                  <div id="no-query">
                     <figure>
                        <img src={loupeicon} alt="loupe-icon"/>
                     </figure>
                     <p>Realiza una consulta para ver los resultados.</p>
                  </div>)}
            </div>
      );
   };

   componentDidMount() {
      let { state } = this.props.location;
      if (state && !this.state.results) {
         let { query } = state;
         api.post('/get-data/search', { query })
            .then(response => {
               let { data } = response;
               this.setState({ results: data ? data.results : null, query });
            });
      };
   };

   // componentDidUpdate() {
   //    if (!this.state.results) {
   //       this.componentDidMount();
   //    };
   // };

};

export default SearchResult;