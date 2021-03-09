import React from 'react';
import './styles/ButtonLoader.css';

function ButtonLoader(props) {
   let { type, isloading, label, ...rest } = props;
   return (
      <button className="btnloader" type={type || "submit"} {...rest}>
         {isloading ?
            <div className="loader" /> :
            label || 'Continuar'}
      </button>
   );
};

export default ButtonLoader;

// Terminado, nada más que revisar...
