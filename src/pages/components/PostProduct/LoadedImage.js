import React from 'react';
import swal from '@sweetalert/with-react';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import './styles/LoadedImage.css';

function LoadedImage(props) {
   let { image, onRemove } = props, { name } = image;
   const showImage = () => {
      let reader = new FileReader();
      reader.onload = () => {
         swal({
            title: name,
            content: <img className="img-on-modal" src={reader.result} alt="user-product" />,
            className: 'show-img-modal',
            buttons: [false, 'Cerrar']
         });
      };
      reader.readAsDataURL(image);
   };
   return (
      <div className="loaded-image">
         <button type="button" onClick={showImage}>
            Ver imagen
         </button>
         <img src={closeicon} alt="close-icon" onClick={onRemove} />
      </div>
   );
};

export default LoadedImage;

// Terminado, nada más que revisar...