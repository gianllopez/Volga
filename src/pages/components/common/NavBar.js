import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import volgalogo from '../../../assets/common/logo.svg';
import BurgerMenu from './BurgerMenu';
import './styles/NavBar.css';

function NavBar(props) {

   const linksAnimations = () => {
      document.getElementById('navbar-links')
         .classList
         .toggle('show-links');
   };

   let isAuthenticated = localStorage.getItem('user-token') || false;

   return (
      <div id="navbar-wrapper">
         <BurgerMenu clickCallback={linksAnimations} />
         <figure>
            <img src={volgalogo} alt="volga-logo" />
         </figure>
         <ul id="navbar-links">
            <Link to='/'>Inicio</Link>
            <Link to='/shops/search'>Buscar</Link>
            <Link to='/shops/explore'>Explorar</Link>
            {isAuthenticated ?
               <Link to='/users/me'>Mi perfil</Link> :
               <Fragment>
                  <Link to='/logup'>Registrar</Link>
                  <Link to='/login'>Iniciar sesión</Link>
               </Fragment>
            }
         </ul>
      </div>
   );
};

export default NavBar;
