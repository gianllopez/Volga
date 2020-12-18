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

   return (
      <div id="navbar-wrapper">
         <BurgerMenu/>
         <figure>
            <img src={volgalogo} alt="volga-logo"/>
         </figure>
         {/* <ul>
            <NavBarLink to='/' label='Inicio'/>
            <NavBarLink to='/shops/explore' label='Explorar'/>
            <NavBarLink to='/shops/search' label='Buscar'/>
            <NavBarLink to='/logup' label='Registrar mi tienda'/>
            <NavBarLink to='/login' label='Iniciar sesión'/>
         </ul> */}
      </div>
   );
};

export default NavBar;
