import React, { Component, Fragment } from 'react';
import { NavBar, RatingSelector, Input, Footer } from './components';
import opsheader from '../assets/NewOpinion/users-opinions.svg';
import './styles/NewOpinion.css';

class NewOpinion extends Component {
   
   state = {
      data: {
         rating: 5.0
      }
   };
   
   changeHandler = event => {
      this.setState({
         data: {
            ...this.state.data,
            [event.target.name]: event.target.value
         }
      });
   };
   
   render() {
      return (
         <Fragment>
            <NavBar/>
            <form id="opinion-form">
               <div id="op-header">
                  <figure>
                     <img src={opsheader} alt="opsheader-icon"/>
                  </figure>
                  <h2>Opina sobre *shop*</h2>
                  <p>Déjalos saber que piensas</p>
               </div>
               <RatingSelector
                  currentRating={this.state.data.rating}
                  changeHandler={this.changeHandler}
               />
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
               <button>Continuar</button>          
            </form>
            <Footer/>
         </Fragment>
      );
   };
};

export default NewOpinion;
