import React, { Component, Fragment } from 'react';
import { CustomMessage, PageLoader, UserProduct } from './components/';
import api from '../utils/api';
import './styles/FavoritesProducts.css';
import nofavsicon from '../assets/FavoritesProducts/nofavs.png';

class FavoritesProducts extends Component {

   state = { favorites: [], loading: true  };

   render() {
      let { favorites, loading } = this.state,
      hasfavs = favorites.length !== 0;
      return (
         <div id="favorites-products">
            {!loading ?
               <Fragment>
                  {hasfavs && <h2>Estos son tus productos favoritos:</h2>}
                  <div>
                     {hasfavs ? 
                        favorites.map((result, index) => 
                        <UserProduct data={result} key={index} />) :
                        <CustomMessage
                           msgimage={nofavsicon}
                           message="No tienes productos favoritos"
                        />}
                  </div> 
               </Fragment> : <PageLoader/>}
         </div>
      );
   };

   componentDidMount() {
      document.title = 'Mis favoritos';
      this.setState({ loading: true }, () => {
         api.get('/get-data/favorites-products')
            .then(({ data }) => this.setState({ favorites: data }))
            .finally(() => this.setState({loading: false}));
      });
   };
 
};

export default FavoritesProducts;
