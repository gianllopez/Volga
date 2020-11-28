import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../components/global/FormLayout';
import Loader from '../components/global/Loader';
import Input from '../components/log-forms/Input';

import logupHero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {

    state = {
        loading: false,            
        errors_messages: undefined,
        data: {
            shop: undefined,
            email: undefined,
            password: undefined,
            location: undefined,
            description: undefined
        }
    };
    
    handleChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        });
    };

    handleSubmit = event => {        
        
        event.preventDefault();        
        
        this.setState({ loading: true });

        fetch('https://volga-rest.herokuapp.com/logup/', {
            method: 'post',
            headers: {
                'Authorization': 'Token 837b82d3853737c9f3ff691479027e92cb0ddb25',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.data)
        })
            .then(response => {
                if (response.ok) {
                    this.setState({ loading: false }, _ => this.props.history.push('/login'));                    
                } else {                    
                    return response.json()
                }
            })
                .then(json => {
                    if (this._isMounted) {
                        this.setState({
                            loading: false,
                            errors_messages: json                        
                        })
                    }
                })
            .catch(error => console.error(error))
    };

    render() {
        return (
            <FormLayout
                formId='logup-form'
                headerImg = {logupHero}
                headerTitle={<h2>Rellena lo datos para<br/>registrar tu tienda con<br/>nosotros</h2>}
                formEntries={
                    <Fragment>
                        <Input
                            label='Tienda'
                            name='shop'
                            onChange={this.handleChange}          
                            errorsObject={this.state.errors_messages}
                        />
                        <Input
                            label='Correo'
                            type='email'
                            name='email'
                            onChange={this.handleChange}              
                            errorsObject={this.state.errors_messages}
                        />
                        <Input
                            label='Contraseña'
                            type='password'
                            name='password'
                            onChange={this.handleChange}              
                            errorsObject={this.state.errors_messages}
                        />
                        <Input
                            label='Ubicación'
                            name='location'
                            onChange={this.handleChange}
                            maxLength='50'
                            errorsObject={this.state.errors_messages}
                        />
                        <Input
                            name='description'
                            label='Descripción'
                            isTextArea={true}
                            maxLength='100'
                            onChange={this.handleChange}
                            errorsObject={this.state.errors_messages}
                        />                        

                        {this.state.loading ? 
                            <Loader width={110} height={35}/> :                               
                            <button type='submit'>
                                Continuar
                            </button>
                        }
                            
                        <p>
                            ¿Ya tienes cuenta?<br/>
                            <Link to='/login'>Ingresa</Link>
                        </p>
                    </Fragment>
                }
                submitHandler={this.handleSubmit}
            />
        );
    }
}

export default Logup;