import React, {Component} from 'react';
import TagBox from '../components/ShopTags/TagBox';
import { tagsProps } from '../assets/';
import tagsheader from '../assets/ShopTags/shop-tags-hero.svg';
import './styles/ShopTags.css';

class ShopTags extends Component {
	
	state = {};

	changeHandler = event => {
		this.setState({
			tags: {
				...this.state.tags,
				[event.target.name]: event.target.value
			}
		});
	};

	submitHandler = event => {		
		event.preventDefault();
	};
	
	render() {
		return (
			<form id="tags-form" onSubmit={this.submitHandler}>
				<div id="tags-header">
					<img src={tagsheader} alt="tags-hero"/>
					<h2>
						¿Con qué etiquetas de venta<br/>
						relacionarías tu tienda?
					</h2>
					<span>Selecciona las que quieras</span>
				</div>
				<div id="tags-entries">
					{tagsProps.map(
						(tagdata, i) => (
							<TagBox
								key={i}
								name={tagdata[0]}
								image={tagdata[1]}
								onChange={this.changeHandler}
							/>
						)
					)}
				</div>
				<button>Continuar</button>
			</form>
		);
	};
};

export default ShopTags;
