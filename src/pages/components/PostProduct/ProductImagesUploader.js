import React, { Component } from 'react';
import ImgUploaderButton from './ImageUploaderButton';
import './styles/ProductImagesUploader.css';

class ProductImagesUploader extends Component {

   loaderTrigger = () => document.querySelector('input[type="file"]').click();

   render() {
      return (
         <div id="piu-wrapper">
            <span>Imágenes (máx. 4): <p>*</p></span>
            <div id="product-image-uploader">
               <ImgUploaderButton/>
               <ImgUploaderButton/>
               <ImgUploaderButton/>
               <ImgUploaderButton/>
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
