import React, { Component } from 'react';
import { RatingSelector, Input, CommentInput } from './components';
import opsheader from '../assets/NewOpinion/users-opinions.svg';
import './styles/NewOpinion.css';

class NewOpinion extends Component {

   state = {
      data: {
         rating: 10,
         clientname: '',
         clientemail: '',
      },
      loading: false
   };

   changeHandler = ({ target }) => {
      let { name, value } = target;
      if (name === 'clientname') {
         const regex = /(?!.*\s{2})^[a-zA-ZÀ-úñÑ\s]+$/
         if (!regex.test(value)) {
            target.value = value.substring(0, (value.length - 1));
         };
      };
      this.setState({
         data: {
            ...this.state.data,
            [name]: target.value
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
            <h3>¿Cómo calificarías su servicio?</h3>
            <RatingSelector onChange={this.changeHandler} />
            <Input
               label="Tu nombre"
               name="clientname"
               onChange={this.changeHandler}
            />
            <Input
               label="Correo"
               name="clientemail"
               type="email"
               onChange={this.changeHandler}
            />
            <CommentInput onChange={this.changeHandler} />
         </form>
      );
   };
};

export default NewOpinion;
