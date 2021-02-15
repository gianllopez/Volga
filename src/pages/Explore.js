import React, { Component } from 'react';
import { Fragment } from 'react';
import api from '../utils/api';
import { ButtonLoader, TagsSelector, PageLoader, UserProduct } from './components';
import './styles/Explore.css';

class Explore extends Component {

   state = { querytags: [] };

   selectHandler = target => {
      let tag = target.innerText,
         { querytags } = this.state;
      if (querytags.includes(tag)) {
         querytags.splice(querytags.indexOf(tag), 1);
      } else {
         querytags.push(tag);
      };
      this.setState({ querytags });
   };

   submitHandler = event => {
      event.preventDefault();
      this.setState({
         querytags: this.state.querytags.join(', '),
         loading: true
      }, () => {
         let { querytags } = this.state;
         api.post('/get-data/explore', { querytags })
            .then(({ data }) => {
               this.setState({ loading: false, results: data });
            });
      });
   };

   render() {
      let { results } = this.state || { results: [] };
      return (
         !this.state.loading ?
            <form id="explore-page" onSubmit={this.submitHandler}>
               {!results ?
                  <Fragment>
                     <h1>Etiquetas a explorar:</h1>
                     <TagsSelector onSelect={this.selectHandler} />
                     <ButtonLoader isloading={false} label="Explorar" />
                  </Fragment> :
                  <div id="explore-results">
                     {results.map((result, index) => (
                        <UserProduct product_data={result} />
                     ))}
                  </div>}
            </form> : <PageLoader />
      );
   };

   componentDidMount() {
      document.title = 'Volga - Explorar';
   };
};

export default Explore;