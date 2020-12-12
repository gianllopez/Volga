import React, {Component} from 'react';
import ProgressBar from '../components/ShopLogo/ProgressBar';
import shoplogohero from '../assets/ShopLogo/shoplogo-hero.svg';

class ShopLogo extends Component {
   render() {
      return (
         <form id="shop-logo" encType="multipart/form-data">
            <div id="logo-header">
               <img src={shoplogohero} alt="shoplogo-hero"/>
               <h1>Selecciona el logo de tu tienda</h1>
               <p>Esto es super importante</p>
            </div>
            <div id="logo-uploader">
               <button>Subir imagen</button>
               <ProgressBar/>
            </div>
         </form>
      );
   };
};

export default ShopLogo;
