import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { LogupInput, ButtonLoader } from './components/';
import loguphero from '../assets/Logup/logup-hero.svg';
import './styles/Logup.css';

export const logupContext = createContext({});

class Logup extends Component {

   state = {
      data: {
         owner: '', shop: '', country: '',
         city: '', address: '', foundation: '',
         email: '', password: '', confirmpwd: ''
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

   submitHandler = event => {
      event.preventDefault();
      this.setState({ loading: true });
      Axios.post('http://127.0.0.1:8000/api/shops/logup/', this.state.data)
         .then(response => {
            debugger
         })
         .catch(error => {
            this.setState({
               errors: error.response.data,
               loading: false
            });
         });
   };

	render() {
      const contextContent = {
         changeHandler: this.changeHandler,
         errors: this.state.errors
      };
		return (
         <form id="logup-form" onSubmit={this.submitHandler}>
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
                     allowblank="true"
                  />
                  <LogupInput
                     label="Fundación"
                     name="foundation"
                     type="date"
                     allowblank="true"
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
               
               <ButtonLoader isLoading={this.state.loading}/>
               
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
