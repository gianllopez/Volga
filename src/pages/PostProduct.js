import React, { Component } from 'react';
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
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      })
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
            <ImagesUploader
               name="images"
               onChange={this.changeHandler}
               loaded={Object.values(this.state.data.images)}
            />
            <div id="ppp-product-info">
               <Input
                  label="Producto"
                  name="product"
                  onChange={this.changeHandler}
               />
               <PriceInput
                  label="Precio"
                  name="price"
                  type="number"
                  onChange={this.changeHandler}
               />
               <DescriptionInput
                  label="Descripción"
                  name="description"
                  onChange={this.changeHandler}
               />
            </div>
            <ButtonLoader isloading={false} />
         </form>
      );
   };

};

export default PostProduct;
