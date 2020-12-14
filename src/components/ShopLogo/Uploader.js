import React from 'react';
import uploadicon from '../../assets/ShopLogo/upload-icon.svg';
import './styles/Uploader.css';

function Uploader(props) {

   const uploaderTrigger = event => {
      event.preventDefault();
      document.getElementById('logo').click();
   };
   
   return (
      <div id="uploader-wrapper">
         <img src={uploadicon} alt="upload-icon"/>
         <button id="loadlogo-btn">Cargar logo</button>         
         <input
            type="file"
            name="logo" 
            id="logo"
            hidden
            {...props}
         />
      </div>
   );

};

export default Uploader;
