import React from 'react';
import './styles/ButtonLoader.css';

const ButtonLoader = props => (
   <button id="btnloader-wrapper" type={props.type || 'submit'}>         
      {props.isLoading ?
         <div id="loader" /> :
         props.label || 'Continuar'
      }
   </button>
);

export default ButtonLoader;
