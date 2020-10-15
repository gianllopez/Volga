import React, {Component, Fragment} from 'react';
import FormLayout from '../components/global/FormLayout';
import logupHero from '../assets/LogUp/logup-hero.svg';
import './styles/LogUp.css';

class LogUp extends Component {
    constructor(props) {}

    render() {
        return (
            <FormLayout
                headerImg={logupHero}
                headerTitle={
                    <h2>
                        Rellena lo datos para
                        <br />
                        registrar tu tienda con
                        <br />
                        nosotros
                    </h2>
                }
                formEntries={
                    <Fragment>
                        <input
                            type='text'
                            name='shop'
                            placeholder='Tienda'
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Correo'
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Contraseña'
                            required
                        />
                        <input
                            type='text'
                            name='address'
                            placeholder='Dirección'
                            required
                        />
                        <textarea
                            name='description'
                            placeholder='Descripción'
                            required
                        />
                        <button>Continuar</button>
                        <p>
                            ¿Ya tienes cuenta?
                            <br />
                            Ingresa
                        </p>
                    </Fragment>
                }
            />
        );
    }
}

export default LogUp;
