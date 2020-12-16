import React, { Component } from 'react';
import Input from '../components/common/Input';
import Loader from '../components/common/Loader';
import { blankValidator, passwordValid } from '../utils/validators';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {

	state = {
		data: {
			owner: '', shop: '', country: '',
			city: '', address: '', foundation: '',
			email: '', password: '', confirmpwd: ''
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
		
		const {isValid, errors} = blankValidator(this.state.data, ['address']);

		if (isValid) {

			this.setState({ loading: true, errors: {} });
			
			const pwdIsValid = passwordValid(this.state.data.password, this.state.data.confirmpwd)

			if (pwdIsValid) {
				console.log('FETCH...');
			} else {
				const errormsg = 'Las contraseñas no coinciden.';
				this.setState({
					errors: {
						confirmpwd: errormsg,
						password: errormsg
					},
					loading: false
				})
			}
		} else {
			this.setState({ errors });
		};

	};

	render() {
		return (
			<form id="logup-form" onSubmit={this.submitHandler}>
				<div id="logup-header">
					<img src={loguphero} alt="logup-hero"/>
					<h1>Crea tu cuenta de Volga</h1>
					<p>Registra tu tienda con nosotros</p>
				</div>
				<div id="logup-entries">					
					<Input
						label="Propietario(a)"
						name="owner"
						onChange={this.changeHandler}
						errors={this.state.errors}
					/>
					<Input
						label="Tienda"
						name="shop"
						onChange={this.changeHandler}
						errors={this.state.errors}
					/>
					<Input
						label="País"
						name="country"
						onChange={this.changeHandler}
						errors={this.state.errors}
					/>
					<Input
						label="Ciudad"
						name="city"
						onChange={this.changeHandler}
						errors={this.state.errors}
					/>
					<Input
						label="Dirección"
						name="address"
						onChange={this.changeHandler}
						errors={this.state.errors}
					/>
					<Input
						label="Fundación"
						name="foundation"
						onChange={this.changeHandler}
						errors={this.state.errors}
					/>
					<Input
						label="Correo"
						name="email"
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
					<Input
						label="Confirmar contraseña"
						name="confirmpwd"
						type="password"
						onChange={this.changeHandler}
						errors={this.state.errors}
					/>
					
					{this.state.loading ? 
						<Loader style={{width: 120, height: 40, marginTop: 7.5}}/>:
						<button>
							Continuar
						</button>
					}
					
					<p>
						¿Ya tienes cuenta?<br/>
						<a href="">Ingresa</a>
					</p>					
				</div>
			
			</form>
		);
	};

};

export default Logup;
