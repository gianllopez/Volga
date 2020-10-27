import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FormLayout from '../components/global/FormLayout';
import Input from '../components/LogUp/Input';
import loginHero from '../assets/LogIn/login-hero.svg';
import './styles/LogIn.css';

class LogIn extends Component {
    render() {
        return (
            <FormLayout
                formId='login-form'
                headerImg={loginHero}
                headerTitle={<h2>Inicia sesión<br/>con tu tienda</h2>}
                formEntries={
                    <Fragment>
                        <Input
                            label='Tienda'
                        />
                        <Input
                            label='Contraseña'
                        />
                        <button>Iniciar</button>
                        <p>
                            ¿No te has registrado?<br/>
                            <Link to='/logup'>Regístrate</Link>
                        </p>                    
                    </Fragment>
                }
            />             
        );
    };
};

export default LogIn;