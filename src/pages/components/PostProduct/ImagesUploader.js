import React, { Component } from 'react';
import './styles/ImagesUploader.css';

class ImagesUploader extends Component {
   render() {
      return (
         <div id="images-uploader">
            <button>Cargar imágenes</button>
            <div>
               <p>
                  No has cargado ninguna imagen <br />
                  (Puedes subir hasta 4 por producto)
               </p>
            </div>
         </div>
      )
   };
};

export default ImagesUploader;