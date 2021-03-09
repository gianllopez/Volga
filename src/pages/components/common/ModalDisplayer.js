import swal from '@sweetalert/with-react';
import React, { Fragment } from 'react';
import './styles/ModalDisplayer.css';

function structure({ title, message }) {
   return (
      <Fragment>
         <p>{title}</p>
         <span>{message}</span>
      </Fragment>
   );
};

const TYPES = {
   NETWORK_ERROR: {
      content: structure ({
         title: 'Error en el registro',
         message: 'Aségurate de estar conectado a internet.'})
   }
};

function ModalDisplayer({ type, buttons, ...rest }) {
   let { icon, dangerMode } = rest,
   config = {
      icon: icon || 'error',
      dangerMode: dangerMode || true,
      buttons: buttons || [false, 'Entendido']
   };
   config.content =
      <div id="modal-displayer-content">
         {type !== 'CUSTOM' ? 
            TYPES[type].content :
            structure(rest)}
      </div>
   return swal(config);
};

export default ModalDisplayer;

// Terminado, nada más que revisar...