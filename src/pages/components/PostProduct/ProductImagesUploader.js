import React, { Component } from 'react';
import './ProductImagesUploader.css';

class ProductImagesUploader extends Component {
   render() {
      return (
         <div id="piu-wrapper">
            <span>Imágenes (máx. 4) de tu producto: <p>*</p></span>
            <div id="product-image-uploader">
               <button>Cargar</button>
            </div>
         </div>
      );
   };
};

export default ProductImagesUploader;
