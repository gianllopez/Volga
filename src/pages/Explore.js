import React, { Component, Fragment } from 'react';
import { ButtonLoader, TagsSelector, PageLoader,
         UserProduct, CustomMessage, ModalDisplayer } from './components';
import api from '../utils/api';
import notags from '../assets/Explore/notags.png';
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

   fetchExplore = () => {
      let { querytags } = this.state;
      api.get('/get-data/explore', { querytags })
         .then(({ data }) => this.setState({ results: data }))
         .catch(({ response }) =>
            this.setState({ blank_results: response.status === 404 }))
         .finally(() => this.setState({ loading: false }))
   };

   submitHandler = event => {
      event.preventDefault();
      let { querytags } = this.state;
      if (querytags.length) {
         querytags = querytags.join(', ')
         this.setState({ querytags, loading: true }, this.fetchExplore);
      } else {
         ModalDisplayer({
            type: 'CUSTOM',
            message: `Para explorar tienes que tener al menos una
                      etiqueta por criterio de exploración.`
         });
      };
   };

   render() {
      let { results, blank_results } = this.state;
      return (
         !this.state.loading ?
            <form id="explore-page" onSubmit={this.submitHandler}>
               {!results ?
                  !blank_results ?
                     <Fragment>
                        <h1>Etiquetas a explorar:</h1>
                        <TagsSelector onSelect={this.selectHandler} />
                        <ButtonLoader isloading={false} label="Explorar" />
                     </Fragment> :
                     <CustomMessage
                        msgimage={notags}
                        message="Aún no se ha registrado un
                                 producto con tales etiquetas."/> :
                  <div id="explore-results">
                     {results.map((result, index) =>
                        <UserProduct data={result} key={index} />)}
                  </div>}
            </form> : <PageLoader />
      );
   };

   componentDidMount() {
      document.title = 'Volga - Explorar';
   };

   componentDidUpdate(prevProps) {
      let { key } = this.props.location;
      if (key !== prevProps.location.key) {
         this.setState({ blank_results: false, querytags: [], results: null });
      };
   };

};

export default Explore;
