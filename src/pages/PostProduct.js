import React, { Component } from 'react';
import { ButtonLoader, DescriptionInput, ImageUploaderButton, Input, PriceInput } from './components/';
import uploadicon from '../assets/PostProduct/upload-icon.svg';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {

   render() {
      return (
         <form id="post-product-page">
            <div id="ppp-header">
               <figure>
                  <img src={prodboxicon} alt="product-box-icon" />
               </figure>
               <h2>Postea tu producto</h2>
            </div>
            <div id="ppp-photo-uploader">
               <span>
                  Sube fotos (hasta 4) de tu producto: <p>*</p>
               </span>
               <div>
                  <ImageUploaderButton />
                  <ImageUploaderButton />
                  <ImageUploaderButton />
                  <ImageUploaderButton />
               </div>
            </div>
            <div id="ppp-product-info">
               <Input
                  label="Producto"
                  name="product"
               />
               <PriceInput
                  label="Precio"
                  name="price"
                  type="number"
               />
               <DescriptionInput
                  label="Descripción"
                  name="description"
               />
               <ButtonLoader isloading={false} />
            </div>
         </form>
      );
   };

};

export default PostProduct;
