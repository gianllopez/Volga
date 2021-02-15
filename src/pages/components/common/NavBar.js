import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import volgalogo from '../../../assets/common/logo.svg';
import BurgerMenu from './BurgerMenu';
import SearchLink from './SearchLink';
import api from '../../../utils/api';
import './styles/NavBar.css';

class NavBar extends Component {

   state = {};

   linksAnimations = () => {
      document.querySelector('#navbar-links')
         .classList
         .toggle('show-links');
   };

   render() {
      this.isAuthenticated = localStorage.getItem('user-token') || false;
      let { picture } = this.state;
      return (
         <div id="navbar-wrapper">
            <BurgerMenu clickCallback={this.linksAnimations} />
            <figure>
               <img src={this.isAuthenticated ? picture : volgalogo} alt="navbarpic" />
            </figure>
            {/* {this.isAuthenticated &&
               <div>
                  <Link>Mi perfil</Link>
                  <Link>Mis favoritos</Link>
                  <Link>Cerrar sesión</Link>
               </div>} */}
            <div id="navbar-links">
               <Link to="/">Inicio</Link>
               <SearchLink />
               <Link to="/products/explore">Explorar</Link>
               {this.isAuthenticated ?
                  <Fragment>
                     <Link to="/my-products/new">Postear</Link>
                  </Fragment> :
                  <Fragment>
                     <Link to="/logup">Registro</Link>
                     <Link to="/login">Iniciar</Link>
                  </Fragment>
               }
            </div>
         </div>
      );
   };
   componentDidMount() {
      if (this.isAuthenticated && !this.state.picture) {
         api.get('/get-data/profile-picture')
            .then(({ data }) => this.setState({ picture: data.picture }));
         let nbimg = document.querySelector('img[alt="navbarpic"]');
         nbimg.addEventListener('click', () => {

         });
      };
   };

   componentDidUpdate() {
      this.componentDidMount();
   };

};

export default NavBar;
