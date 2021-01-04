import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import { LogupInput, ButtonLoader } from './components/';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

export const logupContext = createContext({});

class Logup extends Component {

   state = {
      data: {
         owner: '', shop: '', country: '',
         address: '', foundation: '', email: '',
         password: '', confirmpwd: ''
      },
      errors: {},
      loading: false
   };

   changeHandler = event => {
      this.setState({
         data: {
            ...this.state.data,
            [event.target.name]: event.target.value
         }
      });
   };

	render() {
      const contextContent = {
         changeHandler: this.changeHandler,
         errors: this.state.errors
      };
		return (
         <form id="logup-form">
            <div id="logup-header">
               <img src={loguphero} alt="logup-hero"/>
               <h1>Crea tu cuenta de Volga</h1>
               <p>Registra tu tienda con nosotros</p>
            </div>
            <div id="logup-entries">
               <logupContext.Provider value={contextContent}>
                  <LogupInput
                     label="Propietario(a)"
                     name="owner"
                  />
                  <LogupInput
                     label="Tienda"
                     name="shop"
                  />
                  <LogupInput
                     label="País"
                     name="country"
                  />
                  <LogupInput
                     label="Ciudad"
                     name="city"
                  />
                  <LogupInput
                     label="Dirección"
                     name="address"
                     allowBlank
                  />
                  <LogupInput
                     label="Fundación"
                     name="foundation"
                     type="date"
                     allowBlank
                  />
                  <LogupInput
                     label="Correo"
                     name="email"
                     type="email"
                  />
                  <LogupInput
                     label="Contraseña"
                     name="password"
                     type="password"
                  />
                  <LogupInput
                     label="Confirmar contraseña"
                     name="confirmpwd"
                     type="password"
                  />
               </logupContext.Provider>
            </div>
               
               <ButtonLoader/>
               
               <p>
                  ¿Ya tienes cuenta?<br/>
                  <Link to="/login">
                     Ingresa
                  </Link>
               </p>		
               
         </form>
		);
	};

};

export default Logup;
