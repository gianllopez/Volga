import React from 'react';
import swal from '@sweetalert/with-react';

/* This component isn't a react Component */

const ConfirmationModal = content => (
   swal({
      icon: 'warning',
      content: (
         <div className="swal-modal-text">
            {content}
         </div>
      ),
      buttons: ['No', 'Si'],
      dangerMode: true
   })
);

export default ConfirmationModal;
