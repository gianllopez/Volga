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
               <h2>Selecciona 5-10</h2>
               <img src={shoptagsHero} alt="shop-tags-hero"/>
            </div>
            <input type='text' placeholder='Buscar etiquetas' id='search-filter'/>
            <h3>Etiquetas seleccionadas</h3>
            <section id='selected-tags'/>
            <button>Continuar</button>
         </div>
      );
   };

   componentDidMount() {
      document.getElementById('search-filter').focus();
   };

};

export default ShopTags;