import React, { Component } from 'react';
import { ButtonLoader, DescriptionInput, ImagesUploader, Input, PriceInput } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';
import { noBlankValidator } from '../utils/validators';
import api from '../utils/api';
import swal from '@sweetalert/with-react';

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
         this.setState({loading: true});
         let fdata = new FormData(), statedata = Object.entries(this.state.data);
         for (let data of statedata) {
            let field = data[0], value = data[1];
            if (data[0] === 'images') {
               let imgnames = Object.entries(['image_1', 'image_2', 'image_3', 'image_4']);
               for (let name of imgnames) {
                  field = name[1];
                  value = data[1][name[0]] || '';
                  fdata.append(field, value);
               };
            } else {
               fdata.append(field, value);
            };
         };
         api.post('/products/new', fdata)
            .then(({data}) => {
               swal({
                  title: '¡Tu producto ha sido posteado!',
                  icon: 'success',
                  buttons: [false, 'Continuar']
               }).then(cont => {
                  cont && this.props.history.push(`/${data.user}/catalog/${data.key}`)
               })
            })
            .catch(errors => console.log(errors));
      } else {
         this.setState({ errors });
      };
   };

   render() {
      return (
         <form id="post-product-page" onSubmit={this.submitHandler} encType="multipart/form-data">
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
                  maxLength="50"
                  errors={this.state.errors}
                  regex={/(?!.*\s{2})[a-zA-Z0-9]/}
               />
               <PriceInput
                  label="Precio"
                  name="price"
                  type="number"
                  maxLength="11"
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
            
               <ButtonLoader isloading={this.state.loading} />
            
            </div>
         </form>
      );
   };

};

export default PostProduct;
