import React, { Component } from 'react';
import { RatingSelector, Input } from './components';
import opsheader from '../assets/NewOpinion/users-opinions.svg';
import './styles/NewOpinion.css';

class NewOpinion extends Component {

   state = {
      data: {
         rating: 5,
         clientname: '',
         clientemail: '',
      },
      loading: false
   };

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      });
   };

   render() {
      return (
         <form id="opinion-form">
            <div id="op-header">
               <figure>
                  <img src={opsheader} alt="opsheader-icon" />
               </figure>
               <h2>Opina sobre *shop*</h2>
               <p>Déjalo saber que piensas</p>
            </div>
            <h3>
               ¿Cómo calificarías su servicio?
            </h3>
            <RatingSelector onChange={this.changeHandler} />
            <Input
               label="Nombre"
               name="clientname"
               onChange={this.changeHandler}
            />
            <Input
               label="Correo"
               name="clientemail"
               type="email"
               onChange={this.changeHandler}
            />
            <div id="op-comment">
               <label htmlFor="comment">Comentario: <p>*</p> </label>
               <textarea name="comment" placeholder="..." maxLength="150" />
            </div>
         </form>
      );
   };
};

export default NewOpinion;
