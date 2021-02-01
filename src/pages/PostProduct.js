import React, { Component } from 'react';
import { ButtonLoader, DescriptionInput, ImagesUploader, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';
import { noBlankValidator } from '../utils/validators';
import api from '../utils/api';

class PostProduct extends Component {

   state = {
      data: {
         images: null,
         product: '',
         price: null, pricetype: 'COP',
         description: ''
      },
      loading: false,
      errors: {}
   };

   removeImageHandler = index => {
      let { images } = this.state.data;
      delete images[index];
      let hasImages = Object.entries(images).length >= 1;
      this.setState({
         data: {
            ...this.state.data,
            images: hasImages ? images : null
         }
      });

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
         let { data } = this.state;
         data = { ...data, price: `${data.price} ${data.pricetype}` };
         delete data['pricetype'];
         this.setState({ loading: true, data }, () => {
            let fdata = new FormData(), statedata = Object.entries(this.state.data);
            for (let data of statedata) {
               let field = data[0], value = data[1];
               if (data[0] === 'images') {
                  let imgnames = Object.entries(['image_1', 'image_2', 'image_3', 'image_4']);
                  for (let name of imgnames) {
                     field = name[1];
                     value = data[1][name[0]];
                     fdata.append(field, value);
                  };
               } else {
                  fdata.append(field, value);
               };
            };
            for (let x of fdata.entries()) console.log(x);
            // debugger;
            api.post('/products/new', JSON.stringify(this.state.data))
               .then((x) => { debugger })
               .catch((x) => { debugger });
         });
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
               loaded={Object.entries(this.state.data.images || {})}
               removeHandler={this.removeImageHandler}
            />
            <div id="ppp-product-info">
               <Input
                  label="Producto"
                  name="product"
                  onChange={this.changeHandler}
                  maxLength="25"
                  errors={this.state.errors}
               />
               <PriceInput
                  label="Precio"
                  name="price"
                  type="number"
                  maxLength="15"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
               />
               <DescriptionInput
                  label="Descripción"
                  name="description"
                  maxLength="145"
                  currentLength={this.state.data.description.length}
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
