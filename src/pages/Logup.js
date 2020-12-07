import React, { Component } from 'react';
import Input from '../components/common/Input';
import DateInput from '../components/Logup/DateInput';
import Loader from '../components/common/Loader';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {

	state = {};

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
						label="Ciudad"
						name="city"
						onChange={this.changeHandler}
					/>
					<Input
						label="País"
						name="country"
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
