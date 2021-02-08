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
      return (
         <img
            className="fav-icon"
            src={this.state.isfav ? filledFavIcon: favIcon}
            alt="fav-icon"
            onClick={this.fetchFav}
         />
      );
   }
};

export default FavButton;