import React, { Component } from 'react';
import swal from 'sweetalert';
import { ProductImagesUploader } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
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

   componentDidUpdate() {
      if ((this.state.data.loaded || '').length > 4) {
         swal({
            title: ''
         });
      }
   }

};

export default PostProduct;
