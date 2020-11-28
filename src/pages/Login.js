import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FormLayout from '../components/global/FormLayout';
import Input from '../components/log-forms/Input';
import Loader from '../components/global/Loader';
import loginHero from '../assets/Login/login-hero.svg';
import './styles/Login.css';

class Login extends Component {

    state = {
        error: false,
        loading: false,
        data: {
            shop: undefined,
            password: undefined
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
            loading: true,
            error: false
        });

        fetch('https://volga-rest.herokuapp.com/login/auth/', {
            method: 'post',
            headers: {
                'Authorization': 'Token 837b82d3853737c9f3ff691479027e92cb0ddb25',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.data)
        })
            .then(response => {
                this.setState({ loading: false });
                if (!response.ok) {
                    this.setState({ error: true });
                }
                return response.json()
            })
                .then(json => {                    
                    if (this.state.error) {
                        this.setState({
                            error_message: json.non_field_errors[0]
                        })
                        setTimeout(
                            _ => document.getElementById('invcred-span').style.transform = 'initial'
                        , 1)
                    } else {
                        localStorage.setItem('shop-token', json.token)
                        this.props.history.push(`${this.state.data.shop}/social-networks`)
                    }
                })
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
                                {this.state.error_message}
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
};

export default Login;