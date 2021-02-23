import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import volgalogo from '../../../assets/common/logo.svg';
import logouticon from '../../../assets/common/logout-icon.svg';
import BurgerMenu from './BurgerMenu';
import SearchLink from './SearchLink';
import api from '../../../utils/api';
import './styles/NavBar.css';

class NavBar extends Component {

   state = {
      isauth: localStorage.getItem('user-token') ? true : false,
      ...JSON.parse(localStorage.getItem('uiconstdata'))
   };

   linksAnimations = () => {
      document.getElementById('navbar-links')
         .classList
            .toggle('show-links');
   };

   logOut = () => {
      window.location = '/';
      localStorage.clear();
   };

   render() {
      let { isauth, username, picture } = this.state;
      return (
         <div id="navbar-wrapper">
            <BurgerMenu clickCallback={this.linksAnimations} />
            <Link to={isauth && `/users/${username}`} id="profile-link">
               <figure>
                  <img
                     {...isauth && { className: 'user-rounded-picture' }}
                     src={isauth ? picture : volgalogo}
                     alt="navbar-user-pic"
                  />
               </figure>
            </Link>
            <div id="navbar-links">
               <Link to="/">Inicio</Link>
               <SearchLink />
               <Link to="/products/explore">Explorar</Link>
               {isauth ?
                  <Fragment>
                     <Link to="/my-products/new">Postear</Link>
                     <Link to="/me/favorites">Favoritos</Link>
                  </Fragment> :
                  <Fragment>
                     <Link to="/logup">Registro</Link>
                     <Link to="/login">Iniciar</Link>
                  </Fragment>
               }
            </div>
            {isauth &&
               <img
                  id="logout-btn"
                  src={logouticon}
                  alt="logout-icon"
                  onClick={this.logOut}
               />}

         </div>
      );
   };

   componentDidMount() {
      document.querySelectorAll('#navbar-wrapper a:not(.profile-link)')
         .forEach(el => 
            el.addEventListener('click', function() {
               this.parentElement.parentNode.classList.remove('show-links');
               document.querySelector('#burger-menu').click();
            }));
      if (matchMedia('(min-width: 768px)').matches) {
         window.onscroll = function() {
            ['profile-link', 'navbar-links', 'logout-btn']
               .map(id => {
                  const element = document.getElementById(id);
                  if (element) {                  
                     let { classList } = element;
                     if (this.oldScroll < this.scrollY) {
                        classList.add(`${id}-on-scroll`);
                     } else {
                        classList.remove(`${id}-on-scroll`)
                     };
                  };
               });
            this.oldScroll = this.scrollY;
         };
      };
   };

};

export default NavBar;
