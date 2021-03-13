import React, { useEffect } from 'react';
import uploadicon from '../../../assets/UserProfilePicture/upload-icon.svg';
import checkicon from '../../../assets/UserProfilePicture/check-icon.svg';
import './PictureUploader.css';

function PictureUploader({ onUpload, isloaded }) {

   const uploaderTrigger = () => document.getElementById('picture').click();

   useEffect(() => {
      if (isloaded) {
         let img = document.querySelector('#loadpic-btn figure img'),
         span = document.querySelector('#loadpic-btn span');         
         img.style.animation = 'img-animation 1s';
         span.style.animation = 'span-animation 1s';
         img.src = checkicon;
         img.parentElement.style.backgroundColor = '#00E077';
         setTimeout(() => {
            span.innerText = 'Foto cargada';
            span.classList.add('on-success');            
         }, 500);         
      };
   }, [isloaded]);

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
