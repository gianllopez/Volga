import React, {Component} from 'react';
import SocialNetInput from '../components/SocialNets/SocialNetInput';
import './styles/SocialNets.css';

class SocialNets extends Component {
	render() {
		return (
			<form id="socialnets-form">
					<h2>Redes sociales y de<br/>contacto de tu tienda</h2>
				<div id="socialnets-entries">
					<SocialNetInput name="instagram"/>
					<SocialNetInput name="facebook"/>
					<SocialNetInput name="whatsapp"/>
					<SocialNetInput name="twitter"/>
					<SocialNetInput name="pinterest"/>
				</div>
				<button>Continuar</button>
			</form>
		);
	};
};

export default SocialNets;
