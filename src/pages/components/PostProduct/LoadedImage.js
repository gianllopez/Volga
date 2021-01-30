import React from 'react';
import { showImage } from './local-utils';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import './styles/LoadedImage.css';

function LoadedImage(props) {

   let { image } = props, { name } = image;

   return (
      <div className="loaded-image">
         <div>
            <p>{name}</p>
         </div>
         <button type="button" onClick={() => showImage(image, name)}>
            Ver imagen
         </button>
         <img src={closeicon} alt="close-icon" />
      </div>
   );
};

export default LoadedImage;