import React, {Component} from 'react';
import SocialNetInput from '../components/SocialNets/SocialNetInput';
import {blankValidator} from '../utils/validators';
import swal from '@sweetalert/with-react';
import './styles/SocialNets.css';

class SocialNets extends Component {
	
	state = {
		data: {
			instagram: '', facebook: '', whatsapp: '',
			twitter: '', pinterest: ''
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
		this.setState({ loading: true, error: false });
		const {isValid, errors} = blankValidator(this.state.data);
		if (isValid) {
			console.log('MAKE FETCH...')
		} else {
			swal({
				title: 'Alguna redes no se rellenaron'
			});
		};
	};
	
	render() {
		return (
			<form id="socialnets-form" onSubmit={this.submitHandler}>
					<h2>Redes sociales y de<br/>contacto de tu tienda</h2>
				<div id="socialnets-entries">
					<SocialNetInput
						name="instagram"
						onChange={this.changeHandler}
					/>
					<SocialNetInput
						name="facebook"
						onChange={this.changeHandler}
					/>
					<SocialNetInput
						name="whatsapp"
						onChange={this.changeHandler}
					/>
					<SocialNetInput
						name="twitter"
						onChange={this.changeHandler}
					/>
					<SocialNetInput
						name="pinterest"
						onChange={this.changeHandler}
					/>
				</div>
				<button>Continuar</button>
			</form>
		);
	};
};

export default SocialNets;
