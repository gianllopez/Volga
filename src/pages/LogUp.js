import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import FormLayout from '../components/global/FormLayout';
import logupHero from '../assets/LogUp/logup-hero.svg';
import './styles/LogUp.css';

class LogUp extends Component {
    state = {
        data: {
            shop: undefined,
            email: undefined,
            password: undefined,
            address: undefined,
            description: undefined
        },
        page_states: {
            loading: false,
            error: false
        }
    };

    handleChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        });
    };

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
                            onChange={this.handleChange}
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Correo'
                            required
                            onChange={this.handleChange}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Contraseña'
                            required
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='address'
                            placeholder='Dirección'
                            required
                            onChange={this.handleChange}
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
                            <Link to='/login'>Ingresa</Link>
                        </p>
                    </Fragment>
                }
            />
        );
    }
}

export default LogUp;
