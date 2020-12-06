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
					<Input/>

				</div>
			</form>
		);
	};
};

export default Logup;
