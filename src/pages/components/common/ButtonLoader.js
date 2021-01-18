import React from 'react';
import './styles/ButtonLoader.css';

const ButtonLoader = ({ type, isloading, label }) => (
   <button className="btnloader-wrapper" type={type || 'submit'}>
      {isloading ?
         <div className="loader" /> :
         label || 'Continuar'
      }
   </button>
);

export default ButtonLoader;
