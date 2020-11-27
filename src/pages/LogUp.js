import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../components/global/FormLayout';
import Loader from '../components/global/Loader';
import Input from '../components/LogUp/Input';

import logupHero from '../assets/LogUp/logup-hero.svg';
import './styles/LogUp.css';

class LogUp extends Component {
    
    state = {
        data: {
            shop: undefined, // || 'myshop',
            email: undefined || 'myshop01@gmail.com',
            password: undefined, //  || 'myshop04',
            location: undefined, //  || 'Arizona, EEUU',
            description: undefined, //  || 'That is my shop description.'
        },
        page_states: {
            loading: false,
            error_messages: undefined
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
                ...this.state.page_states,
                loading: true
            }
        });

        fetch('https://volga-rest.herokuapp.com/logup/', {
            method: 'post',
            headers: {
                'Authorization': 'Token c0e03c9ce246125b4bf50cedf9d386f0bc517b23',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.data)
        })
            .then(response => {
                if (response.ok) {
                    this.setState({
                        page_states: {
                            ...this.state.page_states,
                            loading: false
                        }
                    })
                } else {                    
                    return response.json()
                }
            })
                .then(json => {
                    this.setState({
                        page_states: {
                            ...this.state.page_states,
                            loading: false,
                            error_messages: json
                        }
                    })
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
                            errorsObject={this.state.page_states.error_messages}
                        />
                        <Input
                            label='Correo'
                            type='email'
                            name='email'
                            onChange={this.handleChange}              
                            errorsObject={this.state.page_states.error_messages}
                        />
                        <Input
                            label='Contraseña'
                            type='password'
                            name='password'
                            onChange={this.handleChange}              
                            errorsObject={this.state.page_states.error_messages}
                        />
                        <Input
                            label='Ubicación'
                            name='location'
                            onChange={this.handleChange}
                            maxLength='50'
                            errorsObject={this.state.page_states.error_messages}
                        />
                        <Input
                            name='description'
                            label='Descripción'
                            isTextArea={true}
                            maxLength='100'
                            onChange={this.handleChange}
                            errorsObject={this.state.page_states.error_messages}
                        />                        

                        {this.state.page_states.loading ? 
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

export default LogUp;



// fields validations:
    // shop: max_length(40), blank=False, null=True
    // email: max_length(40), blank=False, null=True, unique=True
    // password: max_length(40), blank=False, null=True
    // location: max_length(50), blank=False, null=True
    // description: max_length(100) blank=False, null=True
