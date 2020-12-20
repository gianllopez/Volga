import React, { Component } from 'react';
import { ImageUploaderButton, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {

   state = {
      data: {}
   };
   
   inputHandler = event => {
      const index = event.target.parentElement.id[4];
      let file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
         this.setState({
            data: {
               ...this.state.data,
               loadedImages: {
                  ...this.state.data.loadedImages,
                  [index]: reader.result
               }
            }
         });
      };
      reader.readAsDataURL(file);
   };

   render() {
      return (
         <form id="post-product">            
            <figure>
               <img src={prodboxicon} alt="product-box-icon"/>
            </figure>
            <h2>Postea tu producto</h2>
            <div id="post-product-form">
               <div id="piu-wrapper">
                  <span>
                     Sube fotos (4) de tu producto: <p>*</p>
                  </span>
                  <div id="product-image-uploader">
                     <ImageUploaderButton
                        index="1"
                        inputHandler={this.inputHandler}
                     />
                     <ImageUploaderButton
                        index="2"
                        inputHandler={this.inputHandler}
                     />
                     <ImageUploaderButton
                        index="3"
                        inputHandler={this.inputHandler}
                     />
                     <ImageUploaderButton
                        index="4"
                        inputHandler={this.inputHandler}
                     />
                  </div>
               </div>
               <Input
                  label="Producto"
                  name="product"
               />
               <PriceInput
                  label="Precio"
                  name="price"
                  type="number"
               />
               <div id="product-description">
                  <label htmlFor="description">Descripción (100 caracteres):</label>
                  <textarea name="description" maxLength="100"/>
               </div>
               <button>Postear</button>
            </div>
         </form>
      );
   };

};

export default PostProduct;
