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
      if (event.target.name === 'product-images') {         
         let reader = new FileReader();
         let file = event.target.files[0];
         reader.onload = () => {
            let newimgs = this.state.data.imgs.concat(reader.result);
            this.setState({
               data: {
                  ...this.state.data,
                  imgs: newimgs
               },
               
            });
         };
         reader.readAsDataURL(file);
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

   componentDidUpdate() {
      const btns = document.getElementsByClassName('imgloader-btn');
      const {imgs} = this.state.data;
      imgs.forEach(img => {
         let i = imgs.indexOf(img);
         btns[i].querySelector('img').src = imgs[i]
         debugger
      });
   };

};

export default PostProduct;
