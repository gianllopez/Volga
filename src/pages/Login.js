import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../components/common/FormLayout';
import Input from '../components/common/Input';
import Loader from '../components/common/Loader';
import formValidator from '../utils/validators';

import loginHero from '../assets/Login/login-hero.svg';
import './styles/Login.css';

class Login extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        error: false,
        loading: false,
        errors_messages: {}
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

        this.setState({ loading: true })

        formValidator(
            this.state.data,
            () => {
                fetch('https://volga-rest.herokuapp.com/login/auth/',                
                    {
                        method: 'post',
                        headers: {
                            'Authorization': 'Token 86d97d29eafeec948c5dbca2c611be0a6d4c8190',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state.data)
                    }
                ).then(response => {
                    this.setState({ loading: false });
                    if (!response.ok) {
                        this.setState({ error: true });
                    }
                    return response.json();
                }).then(json => {
                    if (this.state.error && this._isMounted) {
                        this.setState({ errors_messages: json });
                        const errorSpan = document.getElementById('invcred-span');
                        if (errorSpan) {
                            errorSpan.style.transform = 'initial'
                        };
                    } else {
                        localStorage.setItem('shoptoken', json.token);
                        this.props.history.push(`/${json.credentials.shop}/social-networks`);
                    };
                }).catch(error => console.error(error));
            },
            fieldsErrors => {
                this.setState({
                    loading: false,
                    errors_messages: fieldsErrors
                });
            }
        );
        
    }

    render() {
        return (
            <FormLayout
                formId='login-form'
                headerImg={loginHero}
                headerTitle={
                    <Fragment>
                        <h2>Inicia sesión<br/>con tu tienda</h2>
                        {this.state.error && (
                            <span id='invcred-span'>
                                {this.state.errors_messages.non_field_errors}
                            </span>
                        )}
                    </Fragment>                    
                }
                formEntries={
                    <Fragment>
                        <Input
                            name='email'
                            label='Correo'
                            onChange={this.handleChange}
                            errorsObject={this.state.errors_messages}
                        />
                        <Input
                            name='password'
                            type='password'
                            label='Contraseña'
                            onChange={this.handleChange}
                            errorsObject={this.state.errors_messages}
                        />
                        
                        {this.state.loading ? 
                            <Loader/>:
                            <button type='submit'>
                                Iniciar
                            </button>
                        }

                        <p>
                            ¿No te has registrado?<br/>
                            <Link to='/logup'>Regístrate</Link>
                        </p>                    
                    </Fragment>
                }
                submitHandler={this.handleSubmit}
            />             
        );
    };

    componentDidMount() {
        this._isMounted = true;
        document.title = 'Volga - Iniciar sesión';
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

};

export default Login;