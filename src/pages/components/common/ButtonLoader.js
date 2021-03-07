import React from 'react';
import './styles/ButtonLoader.css';

const ButtonLoader = ({ type, isloading, label, ...rest }) => (
   <button className="btnloader-wrapper" type={type || "submit"} {...rest}>
      {isloading ?
         <div className="loader" /> :
         label || 'Continuar'
      }
   </button>
);

export default ButtonLoader;
