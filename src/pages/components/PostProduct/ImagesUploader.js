import React, { Fragment, useEffect, useState } from 'react';
import { ButtonLoader, LoadedImage, ModalDisplayer } from '../';
import { imagesFormat } from '../../../utils/validators';
import './styles/ImagesUploader.css';


function ImagesUploader({ onChange, onRemove, loaded }) {

   const [state, setState] = useState({ error: false, showloaded: false });

   const clickEvent = () => document.querySelector('input#loader').click();
   
   const rightLength = length => {
      if (length > 4) {
         ModalDisplayer({
            type: 'CUSTOM',
            title: 'Límite de imágenes por producto excedido',
            message: 'Sólo puedes cargar 4 imágenes'});
      } else {
         return true;
      };
   };

   const loadedValidation = ({ target }) => {
      let { files } = target,
      valid = imagesFormat(files) && rightLength(files.length);
      if (!valid) {
         target.value = '';
      };
      onChange({
         target: {
            name: 'images',
            value: target.value ? { ...target.files } : null
         }
      });
   };

   useEffect(() => {

   }, [props.errors, error, ])

};



class ImagesUploader extends Component {



   
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
      if (!loaded.length) {
         document.querySelector('input#loader').value = '';
      };
   };

};

export default ImagesUploader;


// Terminado, nada más que revisar...