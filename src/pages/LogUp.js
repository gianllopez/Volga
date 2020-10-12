import React, { Component } from 'react';
import FormLayout from '../components/global/FormLayout';
import logupHero from '../assets/LogUp/logup-hero.svg';
import './styles/LogUp.css';

class LogUp extends Component {
    render() {
        return (
            <FormLayout formId='LogUp-Form'>
                <div id="form-header">
                    <img src={logupHero} alt='logup-hero'/>
                    <h2>Rellena lo datos para<br/>registrar tu tienda con<br/>nosotros</h2>                
                </div>
                <div id='entries'>
                    <input type='text' name='shop' placeholder='Tienda' required/>
                    <input type='email' name='email' placeholder='Correo' required/>
                    <input type='password' name='password' placeholder='Contraseña' required/>                    
                    <input type='text' name='address' placeholder='Dirección'/>
                    <textarea name='description' placeholder='Descripción'/>
                    <button>Continuar</button>
                    <p>¿Ya tienes cuenta?<br/>Ingresa</p>
                </div>
            </FormLayout>
        );
    };
};

export default LogUp;