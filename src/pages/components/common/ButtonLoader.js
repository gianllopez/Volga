import React from 'react';
import './styles/ButtonLoader.css';

const ButtonLoader = ({ type, isloading, label }) => (
   <button className="btnloader-wrapper" {...!isloading && {type: type || "submit"}}>
      {isloading ?
         <div className="loader" /> :
         label || 'Continuar'
      }
   </button>
);

export default ButtonLoader;
