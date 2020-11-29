import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../components/global/FormLayout';
import Input from '../components/log-forms/Input';
import Loader from '../components/global/Loader';

import logupHero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {

	render() {
		return (
			<FormLayout
				formId='logup-form'
				headerImg={logupHero}
				headerTitle={<h2>Rellena lo datos para<br />registrar tu tienda con<br />nosotros</h2>}
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
				submitHandler={null}
			/>
		);
	}
}

export default Logup;
