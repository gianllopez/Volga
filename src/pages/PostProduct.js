import React, { Component, Fragment } from 'react';
import { ImageUploaderButton, Input, PriceInput, NavBar } from './components/';
import uploadicon from '../assets/PostProduct/upload-icon.svg';
import prodboxicon from '../assets/PostProduct/product-box.svg';
import './styles/PostProduct.css';

class PostProduct extends Component {

   state = {
      data: {
         pricetype: 'COP'
      }
   };
   
   imageLoaderHandler = event => {
      const index = event.target.parentElement.id[4];
      let file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
         this.setState({
            data: {
               ...this.state.data,
               loadedImages: {
                  ...this.state.data.loadedImages,
                  [index]: reader.result
               }
            }
         });
      };
      if (file) {
         reader.readAsDataURL(file);
         event.target.value = '';
      };
   };

   changeHandler = event => {
      this.setState({
         data: {
            ...this.state.data,
            [event.target.name]: event.target.value
         }
      });
   };

   removeUploadedImage = event => {
      event.stopPropagation();
      const rmid = parseInt(event.target.parentElement.id[4]);
      let state = this.state;
      delete state.data.loadedImages[rmid];
      this.setState(state, () => {
         document.querySelector(`#btn-${rmid} button img`).src = uploadicon;
      });
   };

   render() {
      return (
         <Fragment>
            <NavBar/>
            <form id="post-product">            
               <figure>
                  <img src={prodboxicon} alt="product-box-icon"/>
               </figure>
               <h2>Postea tu producto</h2>
               <div id="post-product-form">
                  <div id="piu-wrapper">
                     <span>
                        Sube fotos (4) de tu producto: <p>*</p>
                     </span>
                     <div id="product-image-uploader">
                        <ImageUploaderButton
                           index="1"
                           imageLoader={this.imageLoaderHandler}
                           removeHandler={this.removeUploadedImage}
                           images={this.state.data.loadedImages}
                        />
                        <ImageUploaderButton
                           index="2"
                           imageLoader={this.imageLoaderHandler}
                           removeHandler={this.removeUploadedImage}
                           images={this.state.data.loadedImages}
                        />
                        <ImageUploaderButton
                           index="3"
                           imageLoader={this.imageLoaderHandler}
                           removeHandler={this.removeUploadedImage}
                           images={this.state.data.loadedImages}
                        />
                        <ImageUploaderButton
                           index="4"
                           imageLoader={this.imageLoaderHandler}
                           removeHandler={this.removeUploadedImage}
                           images={this.state.data.loadedImages}
                        />
                     </div>
                  </div>
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
                  <div id="product-description">
                     <label htmlFor="description">Descripción (100 caracteres):</label>
                     <textarea name="description" maxLength="100" onChange={this.changeHandler}/>
                  </div>
                  <button>Postear</button>
               </div>
            </form>
         </Fragment>
      );
   };

};

export default PostProduct;
