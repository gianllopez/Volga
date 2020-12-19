import React, { Component } from 'react';
import ImgUploaderButton from './ImageUploaderButton';
import './styles/ProductImagesUploader.css';

class ProductImagesUploader extends Component {

   loaderTrigger = () => document.querySelector('#product-images').click();

   render() {
      return (
         <div id="piu-wrapper">
            <span>Imágenes (máx. 4): <p>*</p></span>
            <div id="product-image-uploader">
               <ImgUploaderButton onClick={this.loaderTrigger}/>
               <ImgUploaderButton onClick={this.loaderTrigger}/>
               <ImgUploaderButton onClick={this.loaderTrigger}/>
               <ImgUploaderButton onClick={this.loaderTrigger}/>
            <input
               type="file"
               name="product-images"
               id="product-images"
               onInput={this.props.inputHandler}
               accept=".png, .jpg, .jpeg"
               hidden               
            />
            </div>
         </div>
      );
   };
};

export default ProductImagesUploader;
