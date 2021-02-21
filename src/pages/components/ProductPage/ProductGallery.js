import React, { Component } from 'react';
import './styles/ProductGallery.css';

class ProductGallery extends Component {

   state = { index: 0 };

   galleryChangeHandler = src => {
      let index = this.props.images.indexOf(src);
      this.setState({ index });
   };

   render() {
      let { images } = this.props, { index } = this.state;
      return (
         <div id="product-gallery">
            <figure>
               <img src={images[index]} alt="pg-pic" id="displayed" />
            </figure>
            <div id="gallery-items">
               {images.map((img, index) => (
                  img && (
                     <img
                        src={img}
                        key={index}
                        alt="gall-item"
                        onClick={() => this.galleryChangeHandler(img)}
                     />
                  )
               ))}
            </div>
         </div>
      );
   };

   componentDidMount() {
      const mediascreen = matchMedia('(min-width: 768px)');
      if (mediascreen.matches) {
         let { clientHeight } = document.querySelector('.product-page');
         console.log(clientHeight);
      };
   };
   
   componentDidUpdate() {
      this.componentDidMount();
   };



};

export default ProductGallery;