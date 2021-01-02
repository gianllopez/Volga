import React from 'react';
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

   return (
      <div id="navbar-wrapper">
         <BurgerMenu clickCallback={linksAnimations}/>
         <figure>
            <img src={volgalogo} alt="volga-logo"/>
         </figure>
         <ul id="navbar-links">            
            <Link to='/'>Inicio</Link>
            <Link to='/shops/search'>Buscar</Link>
            <Link to='/shops/explore'>Explorar</Link>
            <Link to='/logup'>Registrar</Link>
            <Link to='/login'>Iniciar sesión</Link>
         </ul>
      </div>
   );
};

export default NavBar;
