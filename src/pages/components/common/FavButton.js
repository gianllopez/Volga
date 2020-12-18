import React from 'react';
import favIcon from '../../../assets/common/heart.svg';
import filledFavIcon from '../../../assets/common/filled-heart.svg';
import './styles/FavButton.css';

const FavButton = props => (
   <img
      className="fav-icon"
      src={props.success ? filledFavIcon: favIcon}
      alt="fav-icon"
      onClick={props.fetchCallback}
   />
);

export default FavButton;