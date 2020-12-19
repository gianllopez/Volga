import React, { Component } from 'react';
import ImgUploaderButton from './ImageUploaderButton';
import './styles/ProductImagesUploader.css';

class ProductImagesUploader extends Component {
   render() {
      return (
         <div id="piu-wrapper">
            <span>Imágenes (máx. 4): <p>*</p></span>
            <div id="product-image-uploader">
               <ImgUploaderButton index="1"/>
               <ImgUploaderButton index="2"/>
               <ImgUploaderButton index="3"/>
               <ImgUploaderButton index="4"/>
            </div>
         </div>
      );
   };

};

export default ProductImagesUploader;
