import swal from '@sweetalert/with-react';
import React, { Component } from 'react';
import './styles/ProductGallery.css';

class ProductGallery extends Component {

   state = { index: 0 };

   galleryChangeHandler = src => {
      let index = this.props.images.indexOf(src);
      this.setState({ index });
   };

   zoomModalTrigger = ({ target }) => {
      let { previousElementSibling } = target.parentElement;
      swal({
         // title: `${this.props.product}(${this.state.index})`,
         content: <img src={previousElementSibling.src}/>,
         className: 'displayed-zoom-modal',
         buttons: false
      
      });

   };

   render() {
      let { images } = this.props, { index } = this.state;
      return (
         <div id="product-gallery">
            <figure>
               <img src={images[index]} alt="pg-pic"/>
               <div id="zoom-modal">
                  <i className="fas fa-eye"
                     id="modal-eye" onClick={this.zoomModalTrigger}/>
               </div>
            </figure>
            <div id="gallery-items">
               {images.map((img, index) =>                
                  <img
                     src={img}
                     key={index}
                     alt="gall-item"
                     onClick={() => this.galleryChangeHandler(img)}
                  />)}
            </div>
         </div>
      );
   };
};

export default ProductGallery;