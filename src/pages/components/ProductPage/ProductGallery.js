import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import './styles/ProductGallery.css';

class ProductGallery extends Component {

   state = { index: 0 };

   onChangeResponsive = matchMedia('(min-width: 768px)').matches;

   galleryChangeHandler = src => {
      let index = this.props.images.indexOf(src);
      if (index !== this.state.index) {
         this.setState({ index });
      };
   };

   zoomModalTrigger = ({ target }) => {
      if (this.onChangeResponsive) {
         let { previousElementSibling } = target.parentElement;
         swal({
            content: <img src={previousElementSibling.src} id="to-display" alt="product-pic" />,
            className: 'img-modal-displayer',
            buttons: false
         });
      };
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

   componentDidMount() {
      if (this.onChangeResponsive) {
         let prodpage = document.querySelector('.product-page');
         if (prodpage.clientHeight < 400) {
            prodpage.classList.add('center-page');
         } else {
            prodpage.classList.remove('center-page');
         };
      };
   };

   componentDidUpdate() {
      this.componentDidMount();
   };

};

export default ProductGallery;