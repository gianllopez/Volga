import React, { Component } from 'react';
import { DigitsInput } from './components';
import emailicon from '../assets/EmailVerification/email-icon.svg';
import './styles/EmailVerification.css';

class EmailVerification extends Component {

   state = { digits: {} };

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
 
   render() {
      return (
         <div id="email-verification-page">
            <img src={emailicon} alt="email-icon"/>
            <h3>
               Te enviamos un correo a {"EMAIL"} con un código
               con 6 dígitos para la verificación del mismo:
            </h3>
            <DigitsInput
               onChange={this.changeHandler}
               onKeyDown={this.deleteDigitHandler} />
         </div>
      );
   };

};

export default EmailVerification;