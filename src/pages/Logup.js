import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import swal from '@sweetalert/with-react';
import { logUpFormValidator } from '../utils/validators';
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
      if (event.target.name === 'shop') {
         event.target.value = event.target.value
            .replace(/\s/g, '')
            .replace(/_+/g, '')
            .replace(/^_/g, '')
            .replace(/[^\w\s]+/, '')
            
      };
      this.setState({
         data: {
            ...this.state.data,
            [event.target.name]: event.target.value
         }
      });
   };

   submitHandler = event => {
      event.preventDefault();
      logUpFormValidator(this.state.data, ['address', 'foundation'])
         .then(isValid => {
            if (isValid) {
               this.setState({
                  loading: true,
                  errors: {}
               });
               Axios.post('http://127.0.0.1:8000/api/shops/logup/', this.state.data)
                  .then(response => {
                     localStorage.setItem('shop-token', response.data.token);
                  })
                  .catch(errors => {
                     this.setState({
                        errors: errors.response.data,
                        loading: false
                     });
                  });
            }
         }).catch(errors => {
            this.setState({ errors });
         })
   };

   shopNameConditionsModal = event => {
      const conditions = [
         'Solo letras y números.',
         'Solo letras minúsculas.',
         'No puede contener espacios.',
         'Ningún carácter especial es válido.',
         'Este debe ser único.'
      ],
      isFocused = event.target === document.activeElement,
      isModalShowed = this.state.shopConditionModal
      if (isFocused && !isModalShowed) {
         this.setState({ shopConditionModal: true });
         let jsxcontent = (
            <div>
               <span>
                  Para registrar tu tienda aquí, debes tener en cuenta algunas condiciones
                  a la hora de nombrarla:
               </span>
               <ul>
                  {conditions.map((condition, i) => 
                     <li key={i}>{condition}</li>
                  )}
               </ul>
            </div>
         );
         swal({
            title: 'Condiciones para el nombre de la tienda:',
            content: jsxcontent,
            className: 'shopname-conditions'
         });      
      };
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
                     onKeyDown={this.shopNameConditionsModal}
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
