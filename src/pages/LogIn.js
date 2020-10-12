import React, { Component } from 'react';
import FormLayout from '../components/global/FormLayout';
import loginHero from '../assets/LogIn/login-hero.svg';

class LogIn extends Component {
    render() {
        return (
            <FormLayout>
                <div id='form-header'>
                    <img src={loginHero} alt='login-hero'/>
                    <h2>Inicia sesión con tu tienda</h2>
                </div>
                <div id='entries'>
                    <input type='text' placeholder='Tienda o email' required/>
                    <input type='password' placeholder='Contraseña' required/>
                    <button>Iniciar sesión</button>
                    <p>¿No te has registrado?<br/>Regístrate</p>
                </div>                
            </FormLayout>
        )
    };
};

export default LogIn;