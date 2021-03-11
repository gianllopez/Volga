import React, { Component } from 'react';
import { DigitsInput } from './components';
import emailicon from '../assets/EmailVerification/email-icon.svg';
import './styles/EmailVerification.css';

class EmailVerification extends Component {

   state = { digits: [] };

   changeHandler = ({ target: { value } }) => {
      let { digits } = this.state;
      if (digits.length < 6) {
         digits.push(value);
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
               onChange={this.changeHandler} />
         </div>
      );
   };

};

export default EmailVerification;