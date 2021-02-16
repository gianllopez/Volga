import React from 'react';
import { TagBox } from '../';
import swal from '@sweetalert/with-react';
import { tagsProps } from '../../../assets';
import './styles/ProductTags.css';

function ProductTags(changeCallback) {
   let tags = Object.entries(tagsProps);
   return swal({
      title: '¿Con qué etiquetas relacionarías este producto? (10 máximo)',
      content: (
         <div id="product-tag-selector">
            {tags.map((tag, index) => (
               <TagBox
                  name={tag[0]}
                  image={tag[1]}
                  key={index}
                  onChange={() => changeCallback(tag[0])}
               />
            ))}
         </div>
      ),
      buttons: [false, 'Continuar'],
      className: 'product-tags-modal',
      closeOnClickOutside: false
   });


};

export default ProductTags;