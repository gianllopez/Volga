import React, { useState, useEffect } from 'react';
import swal from '@sweetalert/with-react';
import './styles/ProductGallery.css';

function ProductGallery({ images }) {

   const [index, setIndex] = useState(0);

   const galleryChangeHandler = src => {
      let newIndex = images.indexOf(src);
      if (newIndex !== index) {
         setIndex(newIndex);
      };
   };

   const isBigScreen = matchMedia('(min-width: 768px)').matches;

   const zoomModalTrigger = ({ target }) => {
      if (isBigScreen) {
         let { previousElementSibling } = target.parentElement;
         swal({
            content:
               <img src={previousElementSibling.src}
                    id="to-display" alt="product-pic" />,
            className: 'img-modal-displayer',
            buttons: false
         });
      };
   };

   const centerPage = () => {
      let { clientHeight, classList } = document.querySelector('.product-page');
      if (clientHeight < 400) {
         classList.add('center-page');
      } else {
         classList.remove('center-page');
      };
   };
   
   useEffect(centerPage);
   useEffect(centerPage, [index]);

   return (
      <div id="product-gallery">
         <figure>
            <img src={images[index]} alt="pg-pic"/>
            <div id="zoom-modal">
               <i className="fas fa-eye"
                  id="modal-eye" onClick={zoomModalTrigger}/>
            </div>
         </figure>
         <div id="gallery-items">
            {images.map((img, index) =>                
               <img
                  src={img}
                  key={index}
                  alt="gall-item"
                  onClick={() => galleryChangeHandler(img)}
               />)}
         </div>
      </div>
   );

};


export default ProductGallery;