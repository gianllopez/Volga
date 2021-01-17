import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { logUpFormValidator } from '../utils/validators';
import { LogupInput, ButtonLoader } from './components/';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

export const logupContext = createContext({});

class Logup extends Component {

   state = {
      data: {
         name: '', username: '', country: '',
         city: '', email: '', password: '',
         confirmpwd: ''
      },
      errors: {},
      loading: false
   };

   changeHandler = ({ target }) => {
      let { name, value } = target;
      const regsexs = {
         name: /(?!.*\s{2})^[a-zA-ZÀ-úñÑ\s]+$/,
         username: /^[a-z0-9]*$/
      };
      if (name === 'username' || name === 'name') {
         if (!regsexs[name].test(value)) {
            target.value = value.substring(0, (value.length - 1));
         };
      };
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      });
   };

   submitHandler = event => {
      event.preventDefault();
      logUpFormValidator(this.state.data)
         .then(isValid => {
            if (isValid) {
               this.setState({ loading: true, errors: {} });
               api.post('/logup/', this.state.data)
                  .then(response => {
                     localStorage.setItem('user-token', response.data.token);
                     this.props.history.push(`${this.state.data.username}/contact-networks`)
                  })
                  .catch(errors => this.setState({ errors: errors.response.data, loading: false }));
            };
         }).catch(errors => this.setState({ errors }));
   };

   render() {
      const contextContent = {
         changeHandler: this.changeHandler,
         errors: this.state.errors
      };
      return (
         <form id="logup-form" onSubmit={this.submitHandler}>
            <div id="logup-header">
               <img src={loguphero} alt="logup-hero" />
               <h1>Crea tu cuenta de Volga</h1>
               <p>Vende tus productos con nosotros</p>
            </div>
            <div id="logup-entries">
               <logupContext.Provider value={contextContent}>
                  <LogupInput
                     label="Nombre completo"
                     name="name"
                     maxLength="65"
                  />
                  <LogupInput
                     label="Usuario(a)"
                     name="username"
                     maxLength="25"
                  />
                  <LogupInput
                     label="País"
                     name="country"
                     maxLength="30"
                  />
                  <LogupInput
                     label="Ciudad"
                     name="city"
                     maxLength="50"
                  />
                  <LogupInput
                     label="Correo"
                     name="email"
                     type="email"
                     maxLength="75"
                  />
                  <LogupInput
                     label="Contraseña"
                     name="password"
                     type="password"
                     maxLength="30"
                  />
                  <LogupInput
                     label="Confirmar contraseña"
                     name="confirmpwd"
                     type="password"
                     maxLength="30"
                  />
               </logupContext.Provider>
            </div>

            <ButtonLoader isloading={this.state.loading} />

            <p>
               ¿Ya tienes cuenta?<br />
               <Link to="/login">
                  Ingresa
                  </Link>
            </p>

         </form>
      );
   };

};

export default Logup;
