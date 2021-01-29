import swal from '@sweetalert/with-react';
import React, { Component, Fragment } from 'react';
import { CustomModal } from '..';
import './styles/ImagesUploader.css';

class ImagesUploader extends Component {

   clickTrigger = () => document.querySelector('input#loader').click();

   imagesValidation = ({ target }) => {
      let validFormat = true;
      for (let image of target.files) {
         if (!['image/png', 'image/jpeg', 'image/jpg'].includes(image.type)) {
            validFormat = false;
         }
      };
      if (validFormat) {
         if (target.files.length > 4) {
            CustomModal((
               <Fragment>
                  <p>Límite de imágenes por producto excedido</p>
                  <span>Sólo puedes cargar 4 imágenes</span>
               </Fragment>
            ), [false, 'Entendido']);
            target.value = '';
         };
      } else {
         CustomModal((
            <Fragment>
               <p>Archivo(s) inválido(s)</p>
               <span>
                  Verifica que los archivos que cargaste sean imágenes.
               </span>
               <p style={{ fontSize: '.8em' }}>
                  Formatos admitidos: png, jpg, jpeg
               </p>
            </Fragment>
         ), [false, 'Entendido']);
         target.value = '';
      };
      this.props.onChange({ target: { name: this.props.name, value: { ...target.files } } });
   };

   showImageModal = image => {
      let reader = new FileReader();
      reader.onload = () => {
         swal({
            title: image.name,
            content: <img className="img-on-modal" src={reader.result} alt="user-product" />,
            className: 'show-img-modal',
            buttons: [false, 'Cerrar']
         });
      };
      reader.readAsDataURL(image);
   };

   render() {
      return (
         <div id="images-uploader">
            <button type="button" onClick={this.clickTrigger}>
               Cargar imágenes
            </button>
            <div>
               {this.props.loaded.length >= 1 ? (
                  this.props.loaded.map((image, i) => (
                     <div key={i} className="success-load">
                        <div>
                           <p>{image.name}</p>
                        </div>
                        <button type="button" onClick={() => this.showImageModal(image)}>
                           Ver imagen
                        </button>
                     </div>
                  ))
               ) : (
                     <p>
                        No has cargado ninguna imagen <br />
                        (Puedes subir hasta 4 por producto)
                     </p>
                  )}
            </div>
            <input
               type="file"
               id="loader"
               accept="image/png, image/jpeg"
               onChange={this.imagesValidation}
               multiple
               hidden
            />
         </div >
      )
   };

   componentDidUpdate() {
      // debugger
   };

};

export default ImagesUploader;