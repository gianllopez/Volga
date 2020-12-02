import React, { Component } from 'react';
import tagsProps from '../utils/tagsProps';
import shoptagsHero from '../assets/ShopTags/shop-tags-hero.svg';
import './styles/ShopTags.css';

class ShopTags extends Component {
   
   render() {
      return (
         <div id='shop-tags-wrapper'>
            <div id='header'>
               <h1>¿Con qué etiquetas<br/>relacionarías tu tienda?</h1>
               <h2>Seleccionalas</h2>
               <img src={shoptagsHero} alt="shop-tags-hero"/>
            </div>
            {/* // here go the new shop tags */}
            <button>Continuar</button>
         </div>
      );
   };

};

export default ShopTags;