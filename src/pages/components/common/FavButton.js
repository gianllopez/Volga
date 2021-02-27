import React, { Component } from 'react';
import favIcon from '../../../assets/common/heart.svg';
import filledFavIcon from '../../../assets/common/filled-heart.svg';
import api from '../../../utils/api';
import { isAuthenticated } from '../../../utils/routing-tools';
import './styles/FavButton.css';
import { Redirect } from 'react-router-dom';


class FavButton extends Component {

   state = { isfav: this.props.isfav };

   fetchFav = event => {
      if (isAuthenticated()) {
         event.stopPropagation();
         let { product } = this.props;
         api.post('/product-fav', { product })
            .then(({ data }) => this.setState({ ...data }))
      } else {
         this.setState({ authredirect: true });
      };
   };

   render() {
      let { isfav, authredirect } = this.state;
      return (
         !authredirect ? 
            !this.props.withtext ?
               <img
                  className="fav-icon"
                  src={isfav ? filledFavIcon : favIcon}
                  alt="fav-icon"
                  onClick={this.fetchFav}
               /> :
               <button
                  id="fav-btn"
                  onClick={this.fetchFav}
                  className={isfav ? "btn-is-fav" : "btn-no-fav"}>
                  {!isfav ?
                     "Añadir a favoritos" :
                     "Eliminar de favoritos"}
               </button> : 
            <Redirect to="/login" />
            
      );
   }
};

export default FavButton;