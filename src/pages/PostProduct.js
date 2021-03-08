import React, { Component } from 'react';
import { ButtonLoader, DescriptionInput, ImagesUploader,
         Input, PriceInput, ProductTags } from './components/';
import swal from 'sweetalert';
import api from '../utils/api';
import { blankForm } from '../utils/validators';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {

   state = {
      data: {
         images: null, product: '',
         price: 0, pricetype: 'COP',
         description: '', tags: []
      },
      loading: false,
      errors: {}
   };

   removeImageHandler = index => {
      let { images } = this.state.data;
      delete images[index];
      let hasImages = Object.entries(images).length;
      this.setState({
         data: {
            ...this.state.data,
            images: hasImages ? images : null }
      });
   };

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value }
      });
   };

   formatData = stateData => {
      let form = new FormData(),
      dataArray = Object.entries(stateData);
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
      let { data } = this.state;
      let { valid, errors } = blankForm(data, ['description', 'type']);
      if (valid) {
         this.setState({ loading: true });
         let fdata = this.formatData(data);
         ProductTags(tag => this.tagsHandler(tag))
            .then(() => {
               fdata.set('tags', this.state.data.tags.splice(0, 10));
               api.post('/products/new', fdata)
                  .then(({ data }) => 
                     swal({
                        icon: 'success',
                        title: '¡ENHORABUENA!',
                        className: 'good-post',
                        text: 'Tu producto ha sido posteado de manera satisfactoria.'
                     }).then(() => {
                        let { username, key } = data;
                        this.props.history.push(`/${username}/catalog/${key}`);
                     })
                  );
            });
      } else {
         this.setState({ errors });
      };
   };
   
   render() {
      let { errors, data, loading } = this.state;
      return (
         <form id="post-product-page" onSubmit={this.submitHandler}>
            <div id="ppp-header">
               <img src={prodboxicon} alt="product-box-icon"/>
               <h2>Postea tu producto</h2>
               <p>Procura que las fotos sean claras y la descripción explícita</p>
            </div>
            <ImagesUploader
               errors={errors}
               onChange={this.changeHandler}
               onRemove={this.removeImageHandler}
               loaded={Object.entries(data.images || {})}
            />
            <div id="ppp-product-info">
               <Input
                  name="product"
                  maxLength="50"
                  errors={errors}
                  label="Producto"
                  onChange={this.changeHandler}
                  regex={/(?!.*\s{2})[a-zA-Z0-9]/}
               />
               <PriceInput
                  name="price"
                  type="number"
                  label="Precio"
                  maxLength="11"
                  errors={errors}
                  onChange={this.changeHandler}
               />
               <DescriptionInput
                  maxLength="100"
                  errors={errors}
                  name="description"
                  label="Descripción"
                  onChange={this.changeHandler}
                  currentLength={data.description.length}
                  allowblank
               />
               <ButtonLoader isloading={loading} />
            </div>
         </form>
      );
   };

   componentDidMount() {
      document.title = 'Volga - Postear';
   };

};

export default PostProduct;

// Terminado, nada más que resumir...
