import React, { Fragment } from 'react';
import swal from '@sweetalert/with-react';
import { ModalDisplayer } from '..';
// import { CustomModal } from '..';

const clickTrigger = query => document.querySelector(query).click();

function areImages(files) {
   let validFormat = true, alloweds = ['image/png', 'image/jpeg', 'image/jpg'];
   for (let file of files) {
      if (!alloweds.includes(file.type)) {
         validFormat = false;
      };
   };
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

function rightLength(length) {
   if (length > 4) {
      ModalDisplayer({
         type: 'CUSTOM',
         title: 'Límite de imágenes por producto excedido',
         message: 'Sólo puedes cargar 4 imágenes'});
   } else {
      return true;
   };
};

function showImage(image, name) {
   let reader = new FileReader();
   reader.onload = () => {
      swal({
         title: name,
         content: <img className="img-on-modal" src={reader.result} alt="user-product" />,
         className: 'show-img-modal',
         buttons: [false, 'Cerrar']
      });
   };
   reader.readAsDataURL(image);
};

export { clickTrigger, areImages, rightLength, showImage };