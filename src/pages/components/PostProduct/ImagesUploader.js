import React, { Component, Fragment } from 'react';
import { ButtonLoader, LoadedImage, ModalDisplayer } from '../';
import './styles/ImagesUploader.css';

class ImagesUploader extends Component {

   state = { error: false, showloaded: false };

   clickEvent = () => document.querySelector('input#loader').click();

   areImages = files => {
      let formats = ['image/png', 'image/jpeg', 'image/jpg'],
      validFormat = Array.from(files).every((file) => formats.includes(file.type));
      if (!validFormat) {
         ModalDisplayer({
            type: 'CUSTOM',
            title: 'Archivo(s) inválido(s)',
            message: 'Verifica que los archivos que cargaste sean imágenes (png, jpg).'
         });
      } else {
         return true;
      };
   };

   rightLength = length => {
      if (length > 4) {
         ModalDisplayer({
            type: 'CUSTOM',
            title: 'Límite de imágenes por producto excedido',
            message: 'Sólo puedes cargar 4 imágenes'});
      } else {
         return true;
      };
   };

   loadedValidation = ({ target }) => {
      let { files } = target,
      valid = this.areImages(files) && this.rightLength(files.length);
      if (!valid) {
         target.value = '';
      };
      this.props.onChange({
         target: {
            name: 'images',
            value: target.value ? { ...target.files } : null
         }
      });
   };
   
   render() {
      let { loaded, onRemove } = this.props, { showloaded } = this.state;
      return (
         <div id="images-uploader">
            <ButtonLoader
               type="button"
               isloading={false}
               label="Cargar imágenes"
               onClick={this.clickEvent}/>
            <div>
               {loaded.length !== 0 ?
                  <Fragment>
                     <p>Imágenes cargadas</p>
                     <i className={`fas fa-caret-${showloaded ? "up" : "down"}`}
                        onClick={() => this.setState({ showloaded: !showloaded })}/>
                     {showloaded && 
                        <div id="loaded-list">
                           {loaded.map((data, index) => 
                              <LoadedImage
                                 key={index}
                                 image={data[1]}
                                 onRemove={() => onRemove(data[0])}/>)}
                        </div>}
                  </Fragment> :
                  <p>
                     No has cargado ninguna imagen <br />
                     (Puedes subir hasta 4 por producto)
                  </p>}
            </div>
            {this.state.error &&
               <span id="images-blank-error">
                  Tienes que subir al menos una imagen.
               </span>}
            <input
               type="file"
               id="loader"
               accept="image/png, image/jpeg"
               onChange={this.loadedValidation}
               multiple
               hidden
            />
         </div>
      )
   };

   componentDidUpdate() {
      let { errors, loaded } = this.props;
      if (errors['images'] && !this.state.error) {
         this.setState({ error: true }, () =>
            document.querySelector('span#images-blank-error')
               .style.transform = 'initial');
      };
      if (loaded.length === 0) {
         document.querySelector('input#loader').value = '';
      };
   };

};

export default ImagesUploader;


// Terminado, nada más que revisar...