import React, { Component } from 'react';
import { ButtonLoader, DigitsInput, UserPageExists } from './components';
import emailicon from '../assets/EmailVerification/email-icon.svg';
import './styles/EmailVerification.css';
import api from '../utils/api';
import { Redirect } from 'react-router';
import swal from 'sweetalert';

class EmailVerification extends Component {

   state = { digits: {}, loading: true,
             redirect: false, ...this.props.location.state };

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
         let digitsArray = Object.values(this.state.digits),
         { username } = this.props.match.params;
         api.post('/validation/digits-verification', digitsArray)
            .then(() => {
               swal({
                  title: '¡Enhorabuena!',
                  text: 'Tu correo ha sido verificado.',
                  icon: 'success'
               }).then(() =>
                  this.props.history.push({
                     pathname: `/${username}/contact-networks`,
                     state: { exists: true }}));
            })
            .catch(() => this.setState({ invalid: true }));
      };
   };
 
   render() {
      let { redirect, loading, email, invalid } = this.state;
      return (
         <UserPageExists forceLoading={loading}>
            {!redirect ?
               <form id="email-verification-page" onSubmit={this.submitHandler}>
                  <img src={emailicon} alt="email-icon"/>
                  <h3>
                     Te enviamos un correo a {email} con un código
                     con 6 dígitos para la verificación del mismo:
                  </h3>
                  {invalid && 
                     <p id="incorrect-code">Código incorrecto.</p>}
                  <DigitsInput
                     onChange={this.changeHandler}
                     onKeyDown={this.deleteDigitHandler}/>
                  <ButtonLoader
                     isloading={loading}
                     label="Verificar"/>
               </form> : <Redirect to="/" />}
         </UserPageExists>
      );
   };

   componentDidMount() {
      let { email } = this.state;
      if (email) {    
         api.post('/validation/email-verification', { email })
            .catch(errors => console.error(errors))
            .finally(() => this.setState({ loading: false }));
      } else {
         this.setState({ redirect: true });
      };
   };

};

export default EmailVerification;