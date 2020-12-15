import React, { Component } from 'react';
import uploadicon from '../../assets/ShopLogo/upload-icon.svg';
import checkicon from '../../assets/ShopLogo/check-icon.svg';
import './styles/Uploader.css';

class Uploader extends Component {

   state = {
      success: false
   }

   uploaderTrigger = event => {
      event.preventDefault();
      document.getElementById('logo').click();
   };
   
   render() {
      return (
         <div id="uploader-wrapper">            
            <button id="loadlogo-btn">
               <figure>
                  <img src={uploadicon} alt="loader-icon"/>
               </figure>
               <span>Cargar logo</span>               
            </button>
            <input
               type="file"
               name="logo" 
               id="logo"
               hidden
               {...this.props}
            />
         </div>
      );
   };

   componentDidUpdate() {
      if (this.state.success) {
         const loadimg = document.querySelector('#loadlogo-btn figure img');
         const loadspan = document.querySelector('#loadlogo-btn span')
         loadimg.style.animation = 'img-animation 1s';
         loadspan.style.animation = 'span-animation 1s';
         setTimeout(() => {
            loadimg.src = checkicon
            loadspan.innerText = 'Logo cargado'
            loadspan.classList.add('on-success')
         }, 500);
      }
   };
   
};

export default Uploader;
