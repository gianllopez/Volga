import React, { Component, Fragment } from 'react';
import FormLayout from '../components/global/FormLayout';
import loginHero from '../assets/LogIn/login-hero.svg';
import './styles/LogIn.css';

class LogIn extends Component {
    render() {
        return (
            <FormLayout
                headerImg={loginHero}
                headerTitle={<h2>Inicia sesión<br/>con tu tienda</h2>}
                formEntries={
                    <Fragment>
                        <input type='text' placeholder='Tienda o email' required/>
                        <input type='password' placeholder='Contraseña' required/>
                        <button>Iniciar</button>
                        <p>¿No te has registrado?<br/>Regístrate</p>                    
                    </Fragment>
                }
                formId='login-form'
            />             
        );
    };
};

export default LogIn;