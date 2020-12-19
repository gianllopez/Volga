import React, { Component } from 'react';
import ImgUploaderButton from './ImageUploaderButton';
import './styles/ProductImagesUploader.css';

class ProductImagesUploader extends Component {
   render() {
      return (
         <div id="piu-wrapper">
            <span>Imágenes (máx. 4): <p>*</p></span>
            <div id="product-image-uploader">
               <ImgUploaderButton
                  index="0"
                  inputHandler={this.props.inputHandler}
                  imgs={this.props.imgs}
               />
               <ImgUploaderButton
                  index="1"
                  inputHandler={this.props.inputHandler}
                  imgs={this.props.imgs}
               />
               <ImgUploaderButton
                  index="2"
                  inputHandler={this.props.inputHandler}
                  imgs={this.props.imgs}
               />
               <ImgUploaderButton
                  index="3"
                  inputHandler={this.props.inputHandler}
                  imgs={this.props.imgs}
               />
            </div>
         </div>
      );
   };

};

export default ProductImagesUploader;
