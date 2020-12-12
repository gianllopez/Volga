import React, {Component} from 'react';
import ProgressBar from '../components/ShopLogo/ProgressBar';
import shoplogohero from '../assets/ShopLogo/shoplogo-hero.svg';
import './styles/ShopLogo.css';

class ShopLogo extends Component {
   render() {
      return (
         <form id="shoplogo-form" encType="multipart/form-data">
            <img src={shoplogohero} alt="shoplogo-hero"/>
            <h1>Selecciona un logo<br/>para tu tienda</h1>
            <p>Haz que tus clientes la reconozcan</p>
            <button id="upload-btn">Subir imagen</button>
            <ProgressBar/>
            <button>Continuar</button>

         </form>
      );
   };
};

export default ShopLogo;
