import React, { Component } from 'react';
import { Uploader, ButtonLoader } from './components/';
import shoplogohero from '../assets/ShopLogo/shoplogo-hero.svg';
import './styles/ShopLogo.css';

class ShopLogo extends Component {
   render() {
      return (
         <form id="shoplogo-form" encType="multipart/form-data">
            <div id="shoplogo-header">
               <img src={shoplogohero} alt="shoplogo-hero" />
               <h1>Selecciona una foto para tu perfil</h1>
            </div>
            <div id="actions-btns">
               <Uploader isLoaded={false} />
               <div>
                  <ButtonLoader label="Omitir" />
                  <ButtonLoader label="Continuar" />
               </div>
            </div>
         </form>
      );
   };

};

export default ShopLogo;
