import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './components/';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

class Logup extends Component {
	render() {
		return (
         <form id="logup-form">
            <div id="logup-header">
               <img src={loguphero} alt="logup-hero"/>
               <h1>Crea tu cuenta de Volga</h1>
               <p>Registra tu tienda con nosotros</p>
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
                  label="País"
                  name="country"
               />
               <Input
                  label="Ciudad"
                  name="city"
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
                  type="email"
               />
               <Input
                  label="Contraseña"
                  name="password"
                  type="password"
               />
               <Input
                  label="Confirmar contraseña"
                  name="confirmpwd"
                  type="password"
               />
               
               {/* Button & Loader Component */}
               
               <p>
                  ¿Ya tienes cuenta?<br/>
                  <Link to="/login">
                     Ingresa
                  </Link>
               </p>					
            </div>
         </form>
		);
	};

};

export default Logup;
