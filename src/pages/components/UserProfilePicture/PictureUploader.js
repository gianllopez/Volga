import React, { useEffect } from 'react';
import uploadicon from '../../../assets/UserProfilePicture/upload-icon.svg';
import checkicon from '../../../assets/UserProfilePicture/check-icon.svg';
import './PictureUploader.css';

function PictureUploader({ onUpload, isloaded }) {

   const uploaderTrigger = () => document.getElementById('picture').click();

   const uploaderAnimations = () => {
      let img = document.querySelector('#loadpic-btn figure img'),
      span = document.querySelector('#loadpic-btn span');
      img.style.animation = isloaded && 'img-animation 1s';
      span.style.animation = isloaded && 'span-animation 1s';
      img.src = isloaded ? checkicon : uploadicon;
      img.parentElement.style.backgroundColor = isloaded ? '#00E077' : 'inherit';
      setTimeout(() => {
         span.innerText = isloaded ? 'Foto cargada' : 'Cargar';
         let { classList } = span;
         isloaded ? classList.add('on-success') : classList.remove('on-success');
      }, isloaded ? 500 : 0);
   };

   useEffect(uploaderAnimations, [isloaded]);

   return (
      <div id="uploader-wrapper">
         <button id="loadpic-btn" type="button" onClick={uploaderTrigger}>
            <figure>
               <img src={uploadicon} alt="loader-icon" />
            </figure>
            <span>Cargar</span>
         </button>
         <input
            type="file"
            id="picture"
            name="picture"
            onInput={onUpload}
            accept="image/png, image/jpeg"
            hidden
         />
      </div>
   );

};

export default PictureUploader;
