import React, { Component } from 'react';
import Input from '../components/common/Input';
import DateInput from '../components/Logup/DateInput';
import Loader from '../components/common/Loader';
import logupContext from '../utils/contexts';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {

	state = {
		data: {
			owner: '',
			shop: '',
			city: '',
			country: '',
			address: '',
			foundation: '',
			email: '',
			password: '',
			confpassword: ''
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

		const {month, day, year} = this.state.data;

		this.setState({
			loading: true,
			error: false,
			errors: {},
			data: {
				...this.state.data,
				foundation: `${month} ${day} de ${year}`
			}
		});

		fetch('http://localhost:8000/logup/',
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.state.data)
			}
		).then(response => {
			this.setState({ loading: false });
			if (response.ok) {
				console.log('redirect to social nets');
			} else {
				this.setState({ error: true });
			}
			return response.json();
		}).then(json => {
			if (this.state.error) {
				this.setState({errors: json});
			} else {
				console.log(json);
			}
		});

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
						<DateInput
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
							name="confirm-password"
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
