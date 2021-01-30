import React, { Component } from 'react';
import { ButtonLoader, DescriptionInput, ImagesUploader, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';
import { noBlankValidator } from '../utils/validators';

class PostProduct extends Component {

   state = {
      data: {
         images: null,
         product: '',
         price: null, type: '',
         description: ''
      },
      loading: false,
      errors: {}
   };

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      })
   };

   submitHandler = event => {
      event.preventDefault();
      let { isValid, errors } = noBlankValidator(this.state.data, ['description', 'type']);
      if (isValid) {

      } else {
         this.setState({ errors });
      };
   };

   render() {
      return (
         <form id="post-product-page" onSubmit={this.submitHandler}>
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
               errors={this.state.errors}
               loaded={Object.values(this.state.data.images || {})}
            />
            <div id="ppp-product-info">
               <Input
                  label="Producto"
                  name="product"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
               />
               <PriceInput
                  label="Precio"
                  name="price"
                  type="number"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
               />
               <DescriptionInput
                  label="Descripción"
                  name="description"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
               />
            </div>
            <ButtonLoader isloading={this.state.loading} />
         </form>
      );
   };

};

export default PostProduct;
