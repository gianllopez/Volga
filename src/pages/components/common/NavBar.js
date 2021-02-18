import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import volgalogo from '../../../assets/common/logo.svg';
import logouticon from '../../../assets/common/logout-icon.svg';
import BurgerMenu from './BurgerMenu';
import SearchLink from './SearchLink';
import api from '../../../utils/api';
import './styles/NavBar.css';

class NavBar extends Component {

   globdata = JSON.parse(localStorage.getItem('globudata'));

   state = { picture: this.globdata.picture };

   linksAnimations = () => {
      document.getElementById('navbar-links')
         .classList
         .toggle('show-links');
   };

   logout = () => {
      localStorage.removeItem('user-token');
      window.location = '/';
   };

   render() {
      this.isAuthenticated = localStorage.getItem('user-token') || false;
      return (
         <div id="navbar-wrapper">
            <BurgerMenu clickCallback={this.linksAnimations} />
            <Link to={`/users/${this.globdata.username}`}>
               <figure>
                  <img
                     {...this.isAuthenticated && { className: 'user-rounded-picture' }}
                     src={this.isAuthenticated ? this.state.picture : volgalogo}
                     alt="navbarpic"
                     onClick={this.userOptions}
                  />
               </figure>
            </Link>
            <div id="navbar-links">
               <Link to="/">Inicio</Link>
               <SearchLink />
               <Link to="/products/explore">Explorar</Link>
               {this.isAuthenticated ?
                  <Fragment>
                     <Link to="/my-products/new">Postear</Link>
                     <Link to="/me/favorites-products">Favoritos</Link>
                  </Fragment> :
                  <Fragment>
                     <Link to="/logup">Registro</Link>
                     <Link to="/login">Iniciar</Link>
                  </Fragment>
               }
            </div>
            {this.isAuthenticated &&
               <img
                  src={logouticon}
                  id="logout-btn"
                  alt="logout-icon"
                  onClick={this.logout}
               />}

         </div>
      );
   };

};

export default NavBar;
