import React, { Component } from 'react';
import uploadicon from '../../../assets/UserProfilePicture/upload-icon.svg';
import checkicon from '../../../assets/UserProfilePicture/check-icon.svg';
import './Uploader.css';

class Uploader extends Component {

   state = { picture: '' };

   uploaderTrigger = () => document.getElementById('picture').click();

   render() {
      return (
         <div id="uploader-wrapper">
            <button id="loadpic-btn" type="button" onClick={this.uploaderTrigger}>
               <figure>
                  <img src={uploadicon} alt="loader-icon" />
               </figure>
               <span>Cargar</span>
            </button>
            <input
               type="file"
               id="picture"
               name="picture"
               onInput={this.props.onUpload}
               hidden
            />
         </div>
      );
   };

   componentDidUpdate() {
      if (this.props.isloaded) {
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
   };

};

export default Uploader;

/* REVISADO Y NO HAY MÁS QUE RESUMIR: 02/02/2021 */
