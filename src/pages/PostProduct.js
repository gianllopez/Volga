import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import { ProductImagesUploader, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {
   
   state = {
      data: {
         imgs: []
      }
   };

   inputHandler = event => {
      debugger
      if (event.target.name.includes('prodimg')) {
         const reader = new FileReader();
         let file = event.target.files[0];
         let imgindex = event.target.name[7];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.setState({
               data: {
                  ...this.state.data,
                  imgs: {
                     ...this.state.data.imgs,
                     [imgindex]: reader.result
                  }
               }
            });
         };
      }
   };
   
   render() {
      return (
         <form id="post-product">            
            <figure>
               <img src={prodboxicon} alt="product-box-icon"/>
            </figure>
            <h2>Postea tu producto</h2>
            <div id="post-product-form">
               <ProductImagesUploader
                  inputHandler={this.inputHandler}
                  imgs={this.state.data.imgs}
               />
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
