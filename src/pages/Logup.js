import React, { Component } from 'react';
import Input from '../components/common/Input';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {
	render() {
		return (
			<form id="logup-form">
				<div id="logup-header">
					<img src={loguphero} alt="logup-hero"/>
					<h2>
						Registra tu<br/>
						tienda con<br/>
						nosotros
					</h2>
				</div>
				<div id="logup-entries">
					<Input
						label="Propietario(a)"
						name="owner"
					/>
					<Input
						label="Tienda"
						name="shop"
					/>
					<Input
						label="Ciudad"
						name="city"
					/>
					<Input
						label="País"
						name="country"
					/>
					<Input
						label="Dirección"
						name="address"
					/>
					<Input
						label="Fundación"
						name="foundation"
					/>
					<Input
						label="Correo"
						name="email"
					/>
					<Input
						label="Contraseña"
						name="password"
					/>
					<Input
						label="Confirmar contraseña"
						name="confirm-password"
					/>
							
					<button>Continuar</button>
					
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
