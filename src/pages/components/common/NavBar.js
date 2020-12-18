import React from 'react';
import { Link } from 'react-router-dom';
import volgalogo from '../../../assets/common/logo.svg';
import BurgerMenu from './BurgerMenu';
import './styles/NavBar.css';

function NavBar(props) {


   const NavBarLink = props => {
      return (
         <li>
            <Link to={props.to}>{props.label}</Link>
         </li>
      );
   };

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
            <NavBarLink to='/' label='Inicio'/>
            <NavBarLink to='/shops/search' label='Buscar'/>
            <NavBarLink to='/shops/explore' label='Explorar'/>
            <NavBarLink to='/logup' label='Registrar'/>
            <NavBarLink to='/login' label='Iniciar sesión'/>
         </ul>
      </div>
   );
};

export default NavBar;
