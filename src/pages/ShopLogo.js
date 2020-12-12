import React, {Component} from 'react';
import Uploader from '../components/ShopLogo/Uploader';
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
            <Uploader/>
         </form>
      );
   };
};

export default ShopLogo;
