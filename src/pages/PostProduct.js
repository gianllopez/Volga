import React, { Component } from 'react';
import { ButtonLoader, DescriptionInput, ImagesUploader, Input, PriceInput, ProductTags } from './components/';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';
import { noBlankValidator } from '../utils/validators';
import api from '../utils/api';
import swal from 'sweetalert';

class PostProduct extends Component {

   state = {
      data: {
         images: null,
         product: '',
         price: null, pricetype: 'COP',
         description: '',
         tags: []
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
         this.setState({ loading: true });
         const fdata = new FormData();
         Object.entries(this.state.data)
            .forEach(data => {
               let name = data[0],
               value = data[1]
               if (name === 'images') {
                  Object.values(value)
                     .forEach(img => fdata.append('images', img));
               } else {
                  fdata.append(name, value);
               };
            });
         ProductTags(tag => {
            let { tags } = this.state.data;
            if (tags.includes(tag)) {
               tags.splice(tags.indexOf(tag), 1);
            } else {
               tags = tags.concat(tag);
            };
            this.setState({ data: { ...this.state.data, tags } });
         }).then(ready => {
            if (ready) {
               let { tags } = this.state.data,
               tagString = tags.slice(0, 10).join(', '); 
               fdata.set('tags', tagString);
               api.post('/products/new', fdata)
                  .then(response => {
                     if (response.status === 201) {
                        swal({
                           icon: 'success',
                           title: '¡ENHORABUENA!',
                           text: 'Tu producto ha sido posteado de manera satisfactoria.'
                        }).then(gotit => {
                           let { username, key } = response.data;
                           if (gotit) {
                              // this.props.history.push(`/${username}/catalog/${key}`);
                           };
                        });
                     };
                  });
            };
         });
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




// ProductTags(tag => {
   
//    let { tags } = this.state.data;
//    if (tags.includes(tag))
//       tags.splice(tags.indexOf(tag), 1);
//    else tags = tags.concat(tag);
//    this.setState({ data: { ...this.state.data, tags } });

// }).then(() => {

//    fdata.set('tags', this.state.data.tags.slice(0, 10).join(', '));
//    api.post('/products/new', fdata)
//       .then(({ data }) => {
//          swal({
//             title: '¡Tu producto ha sido posteado!',
//             icon: 'success',
//             buttons: [false, 'Continuar']
//          }).then(cont => {
//             cont && this.props.history.push(`/${data.user}/catalog/${data.key}`)
//          })
//       })
//       .catch(errors => console.error(errors))});