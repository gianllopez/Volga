import React, { Component } from 'react';
import ImgUploaderButton from './ImageUploaderButton';
import './styles/ProductImagesUploader.css';

class ProductImagesUploader extends Component {
   render() {
      let {inputHandler, loadedImages} = this.props;
      return (
         <div id="piu-wrapper">
            <span>Imágenes (máx. 4): <p>*</p></span>
            <div id="product-image-uploader">
               <ImgUploaderButton
                  index="0"
                  inputHandler={inputHandler}
                  loadedImages={loadedImages}
               />
               <ImgUploaderButton
                  index="1"
                  inputHandler={inputHandler}
                  loadedImages={loadedImages}
               />
               <ImgUploaderButton
                  index="2"
                  inputHandler={inputHandler}
                  loadedImages={loadedImages}
               />
               <ImgUploaderButton
                  index="3"
                  inputHandler={inputHandler}
                  loadedImages={loadedImages}
               />
            </div>
         </div>
      );
   };

};

export default ProductImagesUploader;
