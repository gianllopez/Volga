import React, { Component } from 'react';
import { LoadedImage } from '..';
import { clickTrigger, areImages, rightLength } from './local-utils';
import './styles/ImagesUploader.css';

class ImagesUploader extends Component {

   state = { error: false };

   loadedValidation = ({ target }) => {

      let { files } = target, valid = areImages(files);

      if (valid) {
         let validlength = rightLength(files.length);
         if (!validlength) {
            target.value = '';
         };
      } else {
         target.value = '';
      };

      this.props.onChange({
         target: {
            name: this.props.name,
            value: target.value ? { ...target.files } : null
         }
      });

   };

   render() {
      this.loaded = this.props.loaded;
      return (
         <div id="images-uploader">
            <button type="button" onClick={() => clickTrigger('input#loader')}>
               Cargar imágenes
            </button>
            <div>
               {this.loaded.length >= 1 ? (
                  this.loaded.map((loadedimg, index) => (
                     <LoadedImage
                        image={loadedimg[1]}
                        removeHandler={() => this.props.removeHandler(loadedimg[0])}
                        key={index}
                     />
                  ))
               ) : (
                     <p>
                        No has cargado ninguna imagen <br />
                        (Puedes subir hasta 4 por producto)
                     </p>
                  )}
            </div>
            {this.state.error && (
               <span id="images-blank-error">
                  Tienes que subir al menos una imagen.
               </span>
            )}
            <input
               type="file"
               id="loader"
               accept="image/png, image/jpeg"
               onChange={this.loadedValidation}
               multiple
               hidden
            />
         </div >
      )
   };

   componentDidUpdate() {
      let { errors, name } = this.props;
      if (errors[name] && !this.state.error) {
         this.setState({ error: true }, () => {
            setTimeout(() => {
               document.querySelector('span#images-blank-error')
                  .style.transform = 'initial';
            }, 1);
         });
      } else if (!errors[name] && this.state.error) {
         this.setState({ error: false });
      };
      if (this.loaded.length === 0) {
         document.querySelector('input#loader').value = '';
      };
   };

};

export default ImagesUploader;