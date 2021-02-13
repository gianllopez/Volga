import React, { Component, Fragment } from 'react';
import { FilterSelector, ShopProduct, UserCard } from './components';
import loupeicon from '../assets/SearchResults/loupe-icon.svg';
import './styles/SearchResults.css';
import api from '../utils/api';

class SearchResult extends Component {

   state = { filter: 'products' };

   loadRequest = () => {
      let query = this.getQuery(), { filter, results } = this.state;
      if (results ? !results[filter] : true) {
         api.post('/get-data/search', { query, filter })
            .then(({ data }) => {
               if (results ? !results[filter] : true) {
                  this.setState ({
                     results: {
                        ...results,
                        [filter] : data ? data.results : []
                     }, query
                  });
               };
            });      
      };
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
      let { filter, query, results } = this.state,
      items = results && filter in results && results[filter] || [];
      return (
         <div id="search-results-page">
            {this.state.query ? (
               <Fragment>   
                  <div id="srp-header">
                     <h2>Resultados para "{query}"</h2>
                     <FilterSelector onChange={this.filterChangeHandler}/>
                     <h4>Encontrados: {items.length}</h4>
                     {items.length === 0 && (
                        <p id="blank-results">
                           No se ha encontrado un producto
                           que coincida con tu consulta.
                        </p>)}
                  </div>
                  <div id="srp-results">
                     {items.map((item, index) => 
                        filter === 'Productos' ? 
                           <ShopProduct data={item} key={index}/> :
                           <UserCard data={item} key={index}/>)}
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