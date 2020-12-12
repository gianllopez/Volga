import React, {Component} from 'react';
import ProgressBar from '../components/ShopLogo/ProgressBar';
import shoplogohero from '../assets/ShopLogo/shoplogo-hero.svg';
import './styles/ShopLogo.css';

class ShopLogo extends Component {
   render() {
      return (
         <form id="shoplogo-form" encType="multipart/form-data">
            <div id="shoplogo-header">
               <img src={shoplogohero} alt="shoplogo-hero"/>
               <div id="header-text">
                  <h1>Selecciona un logo<br/>para tu tienda</h1>
                  <p>Haz que tus clientes <br/> la reconozcan</p>
               </div>
            </div>
            <button id="upload-btn">Subir imagen</button>
            <ProgressBar/>
            <div id="action-btns">
               <button id="skip">Omitir</button>
               <button id="continue">Continuar</button>
            </div>

         </form>
      );
   };
};

export default ShopLogo;
