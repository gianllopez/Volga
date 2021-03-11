import React, { Fragment, useEffect, useState } from 'react';
import { ButtonLoader, LoadedImage, ModalDisplayer } from '../';
import { imagesFormat } from '../../../utils/validators';
import './styles/ImagesUploader.css';

function UploaderIndicator(props) {
   let { show, showToggler, loaded, onRemove } = props;
   return (
      <Fragment>
         <p>Imágenes cargadas</p>
         <i className={`fas fa-caret-${show ? "up" : "down"}`}
            onClick={showToggler}/>
         {show && 
            <div id="loaded-list">
               {loaded.map((data, index) => 
                  <LoadedImage
                     key={index}
                     image={data[1]}
                     onRemove={() => onRemove(data[0])}/>)}
            </div>}
      </Fragment>
   );
};

function ImagesUploader({ onChange, onRemove, loaded, errors }) {

   const [error, setError] = useState(false);
   const [show, setShow] = useState(false);

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
      if (errors['images'] && !error) {
         setError(true);
      };
      if (!loaded.length) {
         document.querySelector('input#loader').value = '';
      };
   }, [errors, error, loaded]);

   return (
      <div id="images-uploader">
         <ButtonLoader
            type="button"
            label="Cargar imágenes"
            onClick={clickEvent}/>
         <div>
            {loaded.length ?
               <UploaderIndicator
                  show={show}
                  showToggler={() => setShow(!show)}
                  loaded={loaded}
                  onRemove={onRemove}/> :
               <p>
                  No has cargado ninguna imagen <br />
                  (Puedes subir hasta 4 por producto)
               </p>}
         </div>
         {error &&
            <span id="images-blank-error">
               Tienes que subir al menos una imagen.
            </span>}
         <input
            type="file"
            id="loader"
            accept="image/png, image/jpeg"
            onChange={loadedValidation}
            multiple
            hidden
         />
      </div>
   );
 
};

export default ImagesUploader;

// Terminado, nada más que revisar...