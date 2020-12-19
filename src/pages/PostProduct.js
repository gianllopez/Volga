import React, { Component } from 'react';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import { ProductImagesUploader } from './components/';
import './styles/PostProduct.css';

class PostProduct extends Component {
   
   state = {
      data: {}
   };

   inputHandler = event => {
      this.setState({
         data: {
            ...this.state.data,
            loaded: event.target.files
         }
      })
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
            </div>
         </form>
      );
   };
};

export default PostProduct;
