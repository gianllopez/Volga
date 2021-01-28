import React, { Component, createContext } from 'react';
import { ButtonLoader, DescriptionInput, ImageUploaderButton, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {

   state = {
      data: {
         images: {}
      }
   };

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            pictures: {
               ...this.state.data.pictures,
               [target.dataset.index]: target.files[0]
            }
         }
      });
   };

   render() {
      return (
         <form id="post-product-page">
            <div id="ppp-header">
               <figure>
                  <img src={prodboxicon} alt="product-box-icon" />
               </figure>
               <h2>Postea tu producto</h2>
            </div>
            <div id="ppp-images-uploader">
               <span>
                  Sube imágenes (hasta 4) de tu producto: <p>*</p>
               </span>
               <div>
                  <ImageUploaderButton index="1" onChange={this.changeHandler} />
                  <ImageUploaderButton index="2" onChange={this.changeHandler} />
                  <ImageUploaderButton index="3" onChange={this.changeHandler} />
                  <ImageUploaderButton index="4" onChange={this.changeHandler} />
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
