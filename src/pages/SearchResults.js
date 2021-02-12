import React, { Component, Fragment } from 'react';
import { FilterSelector, ShopProduct, UserCard } from './components';
import loupeicon from '../assets/SearchResults/loupe-icon.svg';
import './styles/SearchResults.css';
import api from '../utils/api';

class SearchResult extends Component {

   state = { filter: 'Productos' };

   loadRequest = () => {
      let query = this.getQuery(), { filter } = this.state;
      api.post('/get-data/search', { query, filter })
         .then(response => {
            let { data } = response;
            this.setState({ results: data ? data.results : null, query });
         });      
   };

   filterChangeHandler = filter => {
      if (filter !== this.state.filter) {
         this.setState({ filter }, this.loadRequest)
      };
   };

   getQuery = () => {
      let { state } = this.props.location;
      return state ? state.query : '';
   }

   render() {
      let { filter, query, results } = this.state;
      return (
         <div id="search-results-page">
               {this.state.query ? (
                  <Fragment>   
                     <div id="srp-header">
                        <h2>Resultados para "{query}"</h2>
                        <FilterSelector onChange={this.filterChangeHandler}/>
                        {/* <h4>Encontrados: {results ? results.length : 0}</h4> */}
                     </div>
                     <div id="srp-results">
                        {results ? (
                           results.map((result, index) => 
                           filter === 'Productos' ? 
                              <ShopProduct data={result} key={index}/> :
                              <UserCard data={result} key={index}/>)
                        ) :  (<p id="blank-results">
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
      this.loadRequest();
   };

   componentDidUpdate() {
      if (this.state.query !== this.getQuery()) {
         this.componentDidMount();
      };
   };
   
};

export default SearchResult;