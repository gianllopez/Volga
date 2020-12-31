import React, { Component } from 'react';
import { Uploader } from './components/';
import shoplogohero from '../assets/ShopLogo/shoplogo-hero.svg';
import './styles/ShopLogo.css';

class ShopLogo extends Component {
   render() {
      return (
         <form id="shoplogo-form" encType="multipart/form-data">
            <div id="shoplogo-header">
               <img src={shoplogohero} alt="shoplogo-hero"/>
               <h1>Selecciona un logo<br/>para tu tienda</h1>               
            </div>
            <div id="actions-btns">
               <Uploader isLoaded={false}/>
               <div>
                  <button id="skip">
                     Omitir
                  </button>
                  <button id="continue">
                     Continuar
                  </button>
               </div>
            </div>
         </form>
      );
   };

};

export default ShopLogo;
