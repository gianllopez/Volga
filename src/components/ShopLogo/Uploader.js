import React, { Component } from 'react';
import uploadicon from '../../assets/ShopLogo/upload-icon.svg';
import './styles/Uploader.css';

class Uploader extends Component {

   uploaderTrigger = event => {
      event.preventDefault();
      document.getElementById('logo').click();
   };
   
   render() {
      return (
         <div id="uploader-wrapper">            
            <button id="loadlogo-btn">
               <figure>
                  <img src={uploadicon} alt="upload-icon"/>
               </figure>
               <span>
                  Cargar logo
               </span>
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
   
};

export default Uploader;
