import React, {Component} from 'react';
import Input from '../components/common/Input';
import loginhero from '../assets/Login/login-hero.svg';
import './styles/Login.css';

class Login extends Component {
	render() {
		return (
			<form id="login-form">
				<div id="login-header">
					<img src={loginhero} alt="login-hero"/>
					<div id="header-text">
						<h1>Inicia sesión ahora</h1>
						<p>Así podrás estar al día con tu tienda</p>
					</div>
				</div>
				<div id="login-entries">
					<Input
						label="Tienda o Email"
						name="shoporemail"
					/>
					<Input
						label="Contraseña"
						name="password"
						type="password"
					/>
					<button>Iniciar</button>
					<p>
						¿No has registrado tu tienda?<br/>
						<a href="">Regístrala</a>
					</p>
				</div>
			</form>
		);
	};
};

export default Login;
