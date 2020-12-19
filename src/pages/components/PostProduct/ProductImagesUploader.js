import React, { Component } from 'react';
import './ProductImagesUploader.css';

class ProductImagesUploader extends Component {

   loaderTrigger = () => document.querySelector('input[type="file"]').click();

   render() {
      return (
         <div id="piu-wrapper">
            <span>Imágenes (máx. 4) de tu producto: <p>*</p></span>
            <div id="product-image-uploader">
               <button
                  type="button"
                  onClick={this.loaderTrigger}>Cargar</button>
               <input
                  type="file"
                  name="product-images"
                  onInput={this.props.inputHandler}
                  accept=".png, .jpg, .jpeg"
                  hidden
                  multiple
               />
            </div>
         </div>
      );
   };
};

export default ProductImagesUploader;
