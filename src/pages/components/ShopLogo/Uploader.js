import React, { Component } from 'react';
import { successAnimationsTrigger } from '../local-utils';
import uploadicon from '../../../assets/UserProfilePicture/upload-icon.svg';
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
                  <img src={uploadicon} alt="loader-icon" />
               </figure>
               <span>Cargar</span>
            </button>
            <input
               type="file"
               name="logo"
               id="logo"
               onInput={this.props.uploadHandler}
               hidden
            />
         </div>
      );
   };

   componentDidUpdate() {
      if (this.props.isloaded) {
         const loadimg = document.querySelector('#loadlogo-btn figure img'),
            loadspan = document.querySelector('#loadlogo-btn span');
         successAnimationsTrigger(loadimg, loadspan);
      };
   };

};

export default Uploader;
