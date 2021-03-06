import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, ButtonLoader, ModalDisplayer } from './components/';
import { blankForm } from '../utils/validators';
import api from '../utils/api';
import loginhero from '../assets/Login/login-hero.svg';
import './styles/Login.css';

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
      let { valid, errors } = blankForm(this.state.data);
      if (valid) {
         this.setState({ loading: true });
         api.post('/login', this.state.data)
            .then(({ data }) => {
               localStorage.setItem('uiprev', JSON.stringify(data['uiconstdata']));
               localStorage.setItem('user-token', data['token']);
               window.location = '/';
            })
            .catch(({ response, message }) => {
               this.setState({ loading: false }, () => {
                  if (message === 'Network Error') {
                     ModalDisplayer({ type: 'NETWORK_ERROR' });
                  } else {
                     this.setState({ loading: false, errors: response.data });
                  };
               });
            });
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
                  minLength="4"
                  maxLength="25"
                  name="username"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
                  regex={/^[a-z0-9_]*$/}
               />
               <Input
                  label="Contraseña"
                  minLength="8"
                  maxLength="30"
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
   componentDidMount() {
      document.title = 'Volga - Iniciar sesión';
   };
};

export default Login;

/* REVISADO Y NO HAY MÁS QUE RESUMIR: 02/02/2021 */