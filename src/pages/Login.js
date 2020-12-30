import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './components/';
import loginhero from '../assets/Login/login-hero.svg';
import './styles/Login.css';

class Login extends Component {
   render() {
      return (
         <form id="login-form">
            <div id="login-header">
               <img src={loginhero} alt="login-hero" />
               <div id="header-text">
                  <h1>Inicia sesión</h1>
                  <p>Mantente al día con tu tienda</p>
            </div>
            </div>
            <div id="login-entries">
               <Input
                  label="Tienda o Email"
                  name="shoporemail"
                  type="email"
               />
               <Input
                  label="Contraseña"
                  name="password"
                  type="password"
               />
               {/* Button & Loader Component */}
               <p>
                  ¿No has registrado tu tienda?<br/>
                  <Link to="/logup">
                     Regístrala
                  </Link>
               </p>
            </div>
         </form>
      );
   };
};

export default Login;
