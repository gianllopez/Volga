import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../components/global/FormLayout';
import Loader from '../components/global/Loader';

import logupHero from '../assets/LogUp/logup-hero.svg';
import './styles/LogUp.css';

class LogUp extends Component {
    state = {
        // data: {
        //     shop: 'The Drug Shop',
        //     email: 'thedrugshop@email.com',
        //     password: 'thedrugshop001',
        //     location: 'Suan, Atlántico',
        //     description: '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
        // },
        data: {
            shop: null,
            email: '1234512345123451234512345123451234512345@gmail.com',
            password: '',
            location: null,
            description: null
        },
        page_states: {
            loading: false,
            error: false,
            error_msg: undefined
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
        this.setState({
            page_states: {
                loading: true
            }
        });
        fetch('https://volga-rest.herokuapp.com/logup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(this.state.data)
        })
        .then(response => {
            if (response.ok) {
                this.setState({
                    page_states: {
                        loading: false
                    }                    
                });
            } else {
                this.setState({
                    page_states: {
                        loading: false, 
                        error: true
                    }
                });
                return response.json()
            }
        })
        .then(response => {
            
            let errors = Object.entries(response).map(
                error => {
                    let field = error[0]
                    let error_msg = error[1][0]                     
                    switch(error_msg) {
                        case 'This field may not be blank.':
                        case 'This field may not be null.':
                            error_msg = 'Este campo no puede estar vacío.'
                            break
                        case 'Ensure this field has no more than 40 characters.':
                            error_msg = 'Asegúrate que este campo no tenga más de 40 caracteres.'
                            break                        
                    }
                }                
            );

            debugger




            
            
            
            this.setState({
                page_states: {
                    error_msg: response
                }
            })
        })
        
    };

    render() {
        return (
            <FormLayout
                headerImg = {logupHero}
                headerTitle={<h2>Rellena lo datos para<br/>registrar tu tienda con<br/>nosotros</h2>}
                formEntries={
                    <Fragment>
                        <input
                            type='text'
                            name='shop'
                            placeholder='Tienda'
                            onChange={this.handleChange}
                            maxLength='40'
                            // required                            
                        />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repudiandae?</p>
                        <input
                            type='email'
                            name='email'
                            placeholder='Correo'
                            onChange={this.handleChange}
                            maxLength='40'
                            // required                            
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Contraseña'
                            onChange={this.handleChange}
                            maxLength='40'
                            // required                            
                        />
                        <input
                            type='text'
                            name='location'
                            placeholder='Ubicación'
                            onChange={this.handleChange}
                            maxLength='50'
                            // required                            
                        />
                        <textarea
                            name='description'
                            placeholder='Descripción'
                            maxLength='100'
                            // required                            
                        />
                        

                        {/* {this.state.page_states.loading ? 
                            <Loader /> :  */}
                            <button type='submit'>
                                Continuar
                            </button>
                            {/* } */}

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

export default LogUp;



// fields validations:
    // shop: max_length(40), blank=False, null=True
    // email: max_length(40), blank=False, null=True, unique=True
    // password: max_length(40), blank=False, null=True
    // location: max_length(50), blank=False, null=True
    // description: max_length(100) blank=False, null=True
