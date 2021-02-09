import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import volgalogo from '../../../assets/common/logo.svg';
import BurgerMenu from './BurgerMenu';
import SearchLink from './SearchLink';
import './styles/NavBar.css';

function NavBar(props) {

   let isAuthenticated = localStorage.getItem('user-token') || false;

   const linksAnimations = () => {
      document.getElementById('navbar-links')
         .classList
         .toggle('show-links');
   };

   const logOut = event => {
      event.preventDefault();
      localStorage.removeItem('user-token');
      window.location = '/login';
   };

   return (
      <div id="navbar-wrapper">
         <BurgerMenu clickCallback={linksAnimations} />
         <figure>
            <img src={volgalogo} alt="volga-logo" />
         </figure>
         <div id="navbar-links">
            <Link to="/">Inicio</Link>
            <SearchLink />
            <Link to="/products/explore">Explorar</Link>
            {isAuthenticated ?
               <Fragment>
                  <Link to="/my-products/new">Postear</Link>
                  {/* <Link to="/users/me">Mi perfil</Link> */}
                  {/* <a href="/" onClick={logOut}>Cerrar sesión</a> */}
               </Fragment> :
               <Fragment>
                  <Link to="/logup">Registrar</Link>
                  <Link to="/login">Iniciar sesión</Link>
               </Fragment>
            }
         </div>
      </div>
   );
};

export default NavBar;
