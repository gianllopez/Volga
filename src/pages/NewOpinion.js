import React, { Component } from 'react';
import { RatingSelector, Input } from './components';
import opsheader from '../assets/NewOpinion/users-opinions.svg';
import './styles/NewOpinion.css';

class NewOpinion extends Component {
   render() {
      return (
         <form id="opinion-form">
            <div id="op-header">
               <figure>
                  <img src={opsheader} alt="opsheader-icon"/>
               </figure>
               <h2>Opina sobre *shop*</h2>
               <p>Déjalos saber que piensas</p>
            </div>
            <RatingSelector/>
            <Input
               label="Nombre"
               name="user-name"
            />
            <Input
               label="Correo"
               name="user-email"
               type="email"               
            />
            <div id="op-comment">
               <label htmlFor="comment">Comentario: <p>*</p> </label>
               <textarea name="comment" placeholder="..." maxLength="150"/>
            </div>        
         </form>
      );
   };
};

export default NewOpinion;
