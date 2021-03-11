import React, { Component } from 'react';
import { ButtonLoader, DigitsInput } from './components';
import emailicon from '../assets/EmailVerification/email-icon.svg';
import './styles/EmailVerification.css';

class EmailVerification extends Component {

   state = { digits: {}, loading: false };

   changeHandler = ({ target }) => {
      let { digits } = this.state;
      if (Object.values(digits).length < 6) {
         this.setState({
            digits: {
            ...digits,
            [target.dataset.pos]: target.value
         }});
      };
   };

   deleteDigitHandler = ({ key, keyCode, target }) => {
      if (key === 'Backspace' || keyCode === 8) {
         let { digits } = this.state;
         delete digits[target.dataset.pos]
         this.setState({ digits });
      };
   };

   digitsAreValid = () => {
      let entries = document.getElementsByClassName('digit-entry'),
      valid = true;
      for (let entry of entries) {
         if (!entry.value) {
            entry.classList.add('blank-entry-error')
            valid = false
         };
      };
      return valid;
   };

   submitHandler = event => {
      event.preventDefault();
      let valid = this.digitsAreValid();
      if (valid) {
         console.log('Valid!');
      };
   };
 
   render() {
      return (
         <form id="email-verification-page" onSubmit={this.submitHandler}>
            <img src={emailicon} alt="email-icon"/>
            <h3>
               Te enviamos un correo a {"EMAIL"} con un código
               con 6 dígitos para la verificación del mismo:
            </h3>
            <DigitsInput
               onChange={this.changeHandler}
               onKeyDown={this.deleteDigitHandler} />
            <ButtonLoader
               isloading={this.state.loading}
               label="Verificar"/>
         </form>
      );
   };

};

export default EmailVerification;