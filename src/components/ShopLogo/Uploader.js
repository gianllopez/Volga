import React, { Component } from 'react';
import uploadicon from '../../assets/ShopLogo/upload-icon.svg';
import checkicon from '../../assets/ShopLogo/check-icon.svg';
import './styles/Uploader.css';

class Uploader extends Component {

   state = {
      logo: ''
   }

   uploaderTrigger = () => document.getElementById('logo').click();

   render() {
      return (
         <div id="uploader-wrapper">            
            <button id="loadlogo-btn" type="button" onClick={this.uploaderTrigger}>
               <figure>
                  <img src={uploadicon} alt="loader-icon"/>
               </figure>
               <span>Cargar logo</span>               
            </button>
            <input
               type="file"
               name="logo" 
               id="logo"
               onInput={this.props.onChange}
               hidden
            />
         </div>
      );
   };

   componentDidUpdate() {
      if (this.props.isLoaded) {
         const loadimg = document.querySelector('#loadlogo-btn figure img');
         const loadspan = document.querySelector('#loadlogo-btn span');
         loadimg.style.animation = 'img-animation 1s';
         loadspan.style.animation = 'span-animation 1s';
         setTimeout(() => {
            loadimg.src = checkicon;
            loadimg.parentElement.style.backgroundColor = '#00E077';
            loadspan.innerText = 'Logo cargado';
            loadspan.classList.add('on-success');
         }, 500);
      };
   };
   
};

export default Uploader;
