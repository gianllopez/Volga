import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../components/global/FormLayout';
import Input from '../components/log-forms/Input';
import Loader from '../components/global/Loader';
import formValidator from '../utils/validators';

import loginHero from '../assets/Login/login-hero.svg';
import './styles/Login.css';

class Login extends Component {

    state = {
        data: {
            shop: '',
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
                            'Authorization': 'Token 861514f85144b2e674efc59ca4ddcf440ad59c34',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state.data)
                    }
                ).then(response => {
                    this.setState({ loading: false });
                    if (response.ok) {
                        this.props.history.push(`/${this.state.data.shop}/social-networks`);
                    } else {
                        this.setState({ error: true });
                    };
                    return response.json();
                }).then(json => {
                    if (this.state.error && this._isMounted) {
                        this.setState({ errors_messages: json });
                        const errorSpan = document.getElementById('invcred-span')
                        if (errorSpan) { errorSpan.style.transform = 'initial' }
                    } else {
                        localStorage.setItem('shop-token', json.token);
                    };
                });
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
                            name='shop'
                            label='Tienda'
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
                            <Loader width={110} height={35}/> :                               
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