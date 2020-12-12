import React from 'react';
import Loader from '../common/Loader';
import './styles/Uploader.css';

function Uploader(props) {
   return (
      <div id="uploader-wrapper">
         <button id="upload-btn">
            Cargar imagen
         </button>
         <Loader/>
         <input type="file" name="logo" hidden/>
      </div>
      
   );
};

export default Uploader;
