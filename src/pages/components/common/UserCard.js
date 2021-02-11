import React from 'react';
import './styles/UserCard.css';

function UserCard(props) {
	return (
		<div className="user-card">
			<img src="https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/12/02/16069386818127.jpg" alt="user-pic-card"/>
			<div>
				<h3>gianlop3z</h3>
				<h4>Gian Lucas López Ariza</h4>
				<p>Barranquilla, Colombia</p>
			</div>
		</div>
	)
};

export default UserCard;