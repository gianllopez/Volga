import React, { Component } from 'react';
import favIcon from '../../../assets/common/heart.svg';
import filledFavIcon from '../../../assets/common/filled-heart.svg';
import './styles/FavButton.css';
import api from '../../../utils/api';

class FavButton extends Component {

   state = { isfav: this.props.isfav };

   fetchFav = event => {
      event.stopPropagation();
      let { productkey } = this.props;
      api.post('/product-fav', { productkey })
         .then(response => {
            let { isfav } = response.data;
            this.setState({ isfav });
         });
   };

   render() {
      let { isfav } = this.state;
      return (
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
            </button>
      );
   }
};

export default FavButton;