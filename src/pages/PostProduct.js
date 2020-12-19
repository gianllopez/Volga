import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
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
      let nloaded = (this.state.data.loaded || '').length;
      if (nloaded > 4) {      
         swal({
            title: 'Deben ser máximo 4 imágenes',
            content: (
               <p>
                  Haz cargado {nloaded} imágenes y solo son admitidas 4.<br/>
                  Por favor, elimina algunas.
               </p>
            ),
            icon: 'error',
            dangerMode: true
         });
      };
   };

};

export default PostProduct;
