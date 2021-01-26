import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { noBlankValidator } from '../utils/validators';
import api from '../utils/api';
import { Input, ButtonLoader, CustomModal } from './components/';
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
      let { isValid, errors } = noBlankValidator(this.state.data);
      if (isValid) {
         this.setState({ loading: true });
         api.post('/login', this.state.data)
            .then(({ data }) => {
               localStorage.setItem('user-token', data['user-token']);
               this.props.history.push('/');
            })
            .catch(({ response, message }) => {
               this.setState({ loading: false });
               if (message === 'Network Error') {
                  CustomModal((
                     <Fragment>
                        <p>No estás conectado a internet</p>
                        <span>Reestablece la conexión para continuar</span>
                     </Fragment>
                  ), [false, 'Entendido']);
               } else {
                  this.setState({ loading: false, errors: response.data });
               };
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
                  name="username"
                  onChange={this.changeHandler}
                  errors={this.state.errors}
                  regex={/^[a-z0-9]*$/}
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
