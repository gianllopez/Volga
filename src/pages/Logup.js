import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import { LogupInput, ButtonLoader } from './components/';
import { blankForm } from '../utils/validators';
import api from '../utils/api';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

export const logupContext = createContext({});

class Logup extends Component {

   state = {
      data: {
         name: '', username: '', country: '',
         city: '', gender: 'Masculino', email: '',
         password: '', confirmpwd: ''
      },
      errors: {},
      loading: false
   };

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value.trim()
         }
      });
   };

   logupRequest = data => {
      api.post('/logup', data)
         .then(({ data }) => {            
            this.props.history.push({
               pathname: `/${data.uiprev.username}/email-verification`,
               state: {
                  exists: true,
                  email: this.state.data.email,
                  data
               }
            });
         })
         .catch(({ response }) =>
            this.setState({ errors: response.data }));
   };

   submitHandler = event => {
      event.preventDefault();
      let { data } = this.state,
      { valid, errors } = blankForm(data),
      { password, confirmpwd } = data,
      validpwd = password === confirmpwd;
      if (valid && validpwd) {
         this.logupRequest(data);
      } else {
         if (!validpwd) {
            errors.password =
            errors.confirmpwd = 'Las contraseñas no coinciden.'
         };
         this.setState({ errors });
      };
   };

   render() {
      let ctxContent = {
         onChange: this.changeHandler,
         errors: this.state.errors };
      return (
         <form id="logup-form" onSubmit={this.submitHandler}>
            <div id="logup-header">
               <img src={loguphero} alt="logup-hero" />
               <h1>Crea tu cuenta de Volga</h1>
               <p>Vende tus productos con nosotros</p>
            </div>
            <div id="logup-entries">
               <logupContext.Provider value={ctxContent}>
                  <LogupInput 
                     label="Nombre completo"
                     name="name"
                     maxLength="65"
                     minLength="15"
                     regex={/(?!.*\s{2})^[a-zA-ZÀ-úñÑ\s]+$/}
                  />
                  <LogupInput
                     label="Usuario(a)"
                     name="username"
                     maxLength="25"
                     minLength="4"
                     regex={/^[a-z0-9_]*$/}
                  />
                  <LogupInput
                     label="País"
                     name="country"
                     maxLength="30"
                     minLength="5"
                     regex={/(?!.*\s{2})^[a-zA-Z\u00F1A ]*$/}
                  />
                  <LogupInput
                     label="Ciudad"
                     name="city"
                     maxLength="50"
                     minLength="5"
                     regex={/(?!.*\s{2})^[a-zA-Z\u00F1A ]*$/}
                  />
                  <LogupInput
                     label="Género"
                     name="gender"                  
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
                     minLength="8"
                  />
                  <LogupInput
                     label="Confirmar contraseña"
                     name="confirmpwd"
                     type="password"
                     maxLength="30"
                     minLength="8"
                  />
               </logupContext.Provider>
            </div>
            <ButtonLoader isloading={this.state.loading} />
            <p>
               ¿Ya tienes cuenta?<br />
               <Link to="/login">Ingresa</Link>
            </p>
         </form>
      );
   };

   componentDidMount() {
      document.title = 'Volga - Registrar';
   };

};

export default Logup;
