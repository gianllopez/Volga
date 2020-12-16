import React, { Component } from 'react';
import { successAnimationsTrigger } from '../local-utils';
import uploadicon from '../../../assets/ShopLogo/upload-icon.svg';
import './Uploader.css';

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
         successAnimationsTrigger();
      };
   };
   
};

export default Uploader;
