import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../components/global/FormLayout';
import Input from '../components/log-forms/Input';
import Loader from '../components/global/Loader';

import formValidator from '../utils/validators';

import logupHero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {
	
	state = {
		data: {
			shop: '',
			email: '',
			password: '',
			location: '',
			description: ''
		},
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
				fetch('https://volga-rest.herokuapp.com/logup/', 
					{
						method: 'post',
						headers: {
							'Authorization': 'Token 629abde4ff2ffecb8c5448baa8c58454e19a2259',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(this.state.data)
					}
				).then(response => {
					if (response.ok) {
						this.props.history.push('/login');
					} else {
						return response.json();
					}
				}).then(json => {
					this.setState({
						loading: false,
						errors_messages: json
					});
				});
			},
			(fieldsErrors) => {
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
				formId='logup-form'
				headerImg={logupHero}
				headerTitle={
					<h2>
						Rellena lo datos para<br/>
						registrar tu tienda con<br/>
						nosotros
					</h2>
				}
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
							<Loader width={110} height={35} /> :
							<button type='submit'>Continuar</button>
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
	};
};

export default Logup;
