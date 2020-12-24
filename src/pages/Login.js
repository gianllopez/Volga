import React, { Component, Fragment } from 'react';
import { NavBar, Input } from './components/';
import { blankValidator } from '../utils/validators';
import loginhero from '../assets/Login/login-hero.svg';
import './styles/Login.css';

class Login extends Component {

	state = {
		data: {
			shoporemail: '',
			password: ''
		}
	};

	changeHandler = event => {
		this.setState({
			data: {
				...this.state.data,
				[event.target.name]: event.target.value
			}
		});
	};

	submitHandler = event => {
		
		event.preventDefault();

		const {isValid, errors} = blankValidator(this.state.data);

		if (isValid) {
			console.log('MAKE FETCH...');
		} else {
			this.setState({
				errors
			});
		}

	};

	render() {
		return (
			<Fragment>
				<NavBar/>
				<form id="login-form" onSubmit={this.submitHandler}>
					<div id="login-header">
						<img src={loginhero} alt="login-hero"/>
						<div id="header-text">
							<h1>Inicia sesión</h1>
							<p>Mantente al día con tu tienda</p>
						</div>
					</div>
					<div id="login-entries">
						<Input
							label="Tienda o Email"
							name="shoporemail"
							type="email"
							onChange={this.changeHandler}
							errors={this.state.errors}
							/>
						<Input
							label="Contraseña"
							name="password"
							type="password"
							onChange={this.changeHandler}
							errors={this.state.errors}
						/>
						<button>Iniciar</button>
						<p>
							¿No has registrado tu tienda?<br/>
							<a href="">Regístrala</a>
						</p>
					</div>
				</form>
			</Fragment>
		);
	};
};

export default Login;
