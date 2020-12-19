import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import { ProductImagesUploader, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {
   
   state = {
      data: {
         loadedimgs: []
      }
   };

   inputHandler = event => {
      if (event.target.name === 'product-images') {         
         this.setState({
            data: {
               ...this.state.data,
               loadedimgs: this.state.data.loadedimgs.concat(event.target.files[0])
            }
         })         
      } else {
         // Evaluate fields
      };
   };
   
   render() {
      return (
         <form id="post-product">            
            <figure>
               <img src={prodboxicon} alt="product-box-icon"/>
            </figure>
            <h2>Postea tu producto</h2>
            <div id="post-product-form">
               <ProductImagesUploader inputHandler={this.inputHandler}/>
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
