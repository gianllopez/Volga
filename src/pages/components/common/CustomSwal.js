import React from 'react';
import swal from 'sweetalert';
import './styles/CustomSwal.css';

const CustomSwal = props => (
   <div id="custom-swal">
      {swal({...props})}
   </div>
);

export default CustomSwal;
