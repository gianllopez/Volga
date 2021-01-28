import React, { Component, createContext } from 'react';
import { ButtonLoader, DescriptionInput, ImagesUploader, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {

   state = {
      data: {
         images: {}
      }
   };

   changeHandler = ({ target }) => {
      debugger
   };

   render() {
      return (
         <form id="post-product-page">
            <div id="ppp-header">
               <figure>
                  <img src={prodboxicon} alt="product-box-icon" />
               </figure>
               <h2>Postea tu producto</h2>
               <p>Procura que las fotos sean claras y la descripción explícita</p>
            </div>
            <ImagesUploader />
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
            </div>
            <ButtonLoader isloading={false} />
         </form>
      );
   };

};

export default PostProduct;
