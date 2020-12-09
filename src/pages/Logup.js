import React, { Component } from 'react';
import Input from '../components/common/Input';
import Loader from '../components/common/Loader';
import logupContext from '../utils/contexts';
import {blankValidator, passwordValid} from '../utils/validators';
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
				fetch('http://localhost:8000/logup/',
				{
					method: 'post',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(this.state.data)
				}).then(response => {
						this.setState({ loading: false });
						response.ok ? 
							console.log('/socialnets redirect...') :
							this.setState({ error: true });
						return response.json();
					}).then(json => {
							this.state.error ? 
							this.setState({errors: json}) :
							console.log(json)
						});
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
		}

	};

	render() {
		return (
			<form id="logup-form" onSubmit={this.submitHandler}>
				<div id="logup-header">
					<img src={loguphero} alt="logup-hero"/>
					<h2>
						Registra tu tienda<br/>
						con nosotros
					</h2>
				</div>
				<div id="logup-entries">
					<logupContext.Provider value={{errors: this.state.errors || {}}}>
						<Input
							label="Propietario(a)"
							name="owner"
							onChange={this.changeHandler}
						/>
						<Input
							label="Tienda"
							name="shop"
							onChange={this.changeHandler}
						/>
						<Input
							label="País"
							name="country"
							onChange={this.changeHandler}
						/>
						<Input
							label="Ciudad"
							name="city"
							onChange={this.changeHandler}
						/>
						<Input
							label="Dirección"
							name="address"
							onChange={this.changeHandler}
						/>
						<Input
							label="Fundación"
							name="foundation"
							onChange={this.changeHandler}
						/>
						<Input
							label="Correo"
							name="email"
							type="email"
							onChange={this.changeHandler}
						/>
						<Input
							label="Contraseña"
							name="password"
							type="password"
							onChange={this.changeHandler}
						/>
						<Input
							label="Confirmar contraseña"
							name="confirmpwd"
							type="password"
							onChange={this.changeHandler}
						/>
					</logupContext.Provider>
					
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
