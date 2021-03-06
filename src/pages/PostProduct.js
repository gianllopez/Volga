import React, { Component } from 'react';
import { ButtonLoader, DescriptionInput, ImagesUploader, Input, ModalDisplayer, PriceInput, ProductTags } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';
import { blankForm } from '../utils/validators';
import api from '../utils/api';
import swal from 'sweetalert';

class PostProduct extends Component {

   state = {
      data: {
         images: null, product: '',
         price: null, pricetype: 'COP',
         description: '', tags: []
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
      });
   };

   formatData = () => {
      let form = new FormData(),
      dataArray = Object.entries(this.state.data);
      for (let data of dataArray) {
         let [name, value] = data;
         if (name === 'images') {
            Object.values(value).forEach(img =>
               form.append('images', img));
         } else {
            form.append(name, value);
         };
      };
      return form;
   };

   tagsHandler = tag => {
      let { tags } = this.state.data;
      if (tags.includes(tag)) {
         tags.splice(tags.indexOf(tag), 1);
      } else {
         tags = tags.concat(tag);
      };
      this.setState({ data: { ...this.state.data, tags } });
   };

   submitHandler = event => {
      event.preventDefault();
      let { valid, errors } = blankForm(this.state.data, ['description', 'type']);
      if (valid) {
         this.setState({ loading: true });
         let fdata = this.formatData();
         ProductTags(tag => this.tagsHandler(tag))
            .then(() => {
               fdata.set('tags', this.state.data.tags);
               api.post('/products/new', fdata)
                  .then(response => 
                     swal({
                        icon: 'success',
                        title: '¡ENHORABUENA!',
                        text: 'Tu producto ha sido posteado de manera satisfactoria.'
                     }).then(() => {
                        let { username, key } = response.data;
                        this.props.history.push(`/${username}/catalog/${key}`);
                     })
                  );
            });
      } else {
         this.setState({ errors });
      };
   };

   render() {
      return (
         <form id="post-product-page" onSubmit={this.submitHandler} encType="multipart/form-data">
            <div id="ppp-header">
               <img src={prodboxicon} alt="product-box-icon" />
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
                  maxLength="100"
                  currentLength={this.state.data.description.length}
                  onChange={this.changeHandler}
                  errors={this.state.errors}
                  allowblank
               />

               <ButtonLoader isloading={this.state.loading} />

            </div>
         </form>
      );
   };

   componentDidMount() {
      document.title = 'Volga - Postear';
   };

};

export default PostProduct;
