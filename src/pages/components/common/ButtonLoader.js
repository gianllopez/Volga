import React from 'react';
import './styles/ButtonLoader.css';

const ButtonLoader = ({ type, isloading, label }) => (
   <button id="btnloader-wrapper" type={type || 'submit'}>
      {isloading ?
         <div id="loader" /> :
         label || 'Continuar'
      }
   </button>
);

export default ButtonLoader;
