import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, ButtonLoader } from './components/';
import loginhero from '../assets/Login/login-hero.svg';
import './styles/Login.css';
import { noBlankValidator } from '../utils/validators';

class Login extends Component {

   state = {
      data: {
         username: '',
         password: ''
      },
      loading: false,
      errors: {}
   };

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      });
   };

   submitHandler = event => {
      event.preventDefault();
      let { isValid, errors } = noBlankValidator(this.state.data);
      if (isValid) {
         console.log('Make fetch');
      } else {
         this.setState({ errors });
      };
   };

   render() {
      return (
         <form id="login-form" onSubmit={this.submitHandler}>
            <div id="login-header">
               <img src={loginhero} alt="login-hero" />
               <div id="header-text">
                  <h1>Inicia sesión</h1>
                  <p>Mantente al día con tus productos</p>
               </div>
            </div>
            <div id="login-entries">
               <Input
                  label="Nombre de usuario"
                  name="username"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
               />
               <Input
                  label="Contraseña"
                  name="password"
                  type="password"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
               />
               <ButtonLoader isloading={this.state.loading} />
               <p>
                  ¿No te has registrado?<br />
                  <Link to="/logup">Regístrate</Link>
               </p>
            </div>
         </form>
      );
   };
};

export default Login;
