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
		error: false,
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
							'Authorization': 'Token 86d97d29eafeec948c5dbca2c611be0a6d4c8190',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(this.state.data)
					}
				).then(response => {
					if (!response.ok) {
						this.setState({ error: true })
					}
					return response.json();
				}).then(json => {
					if (this.state.error && this._isMounted) {
						this.setState({
							loading: false,
							errors_messages: json
						});
					} else {
						localStorage.setItem('shoptoken', json.token);
						this.props.history.push(`/${json.credentials.shop}/social-networks`);
					}
				}).catch(error => console.error(error));
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
							<Loader/>:
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
	
	componentDidMount() {
		this._isMounted = true;
		document.title = 'Volga - Registro';
	};

	componentWillUnmount() {
		this._isMounted = false;
	};

};

export default Logup;
