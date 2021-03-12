import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logOut } from '../../../utils/routing-tools'
import BurgerMenu from './BurgerMenu';
import SearchLink from './SearchLink';
import volgalogo from '../../../assets/common/logo.svg';
import logouticon from '../../../assets/common/logout-icon.svg';
import './styles/NavBar.css';


function NavBarLinks({ isauth }) {
   return (
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
               <Link to="/logup">Registrar</Link>
               <Link to="/login">Iniciar sesión</Link>
            </Fragment>
         }
      </div>
   );
};

function NavBar(props={}) {

   const [state] = useState({
      isauth: isAuthenticated(),
      ...JSON.parse(localStorage.getItem('uiprev'))});

   const linksOnScrollAnim = (id, oldScroll, scrollY) => {
      const navlink = document.getElementById(id);
      if (navlink) {              
         let { classList } = navlink;
         if (oldScroll < scrollY) {
            classList.add(`${id}-on-scroll`);
         } else {
            classList.remove(`${id}-on-scroll`)
         };
      };
   }; 

   const linksAnimations = () => {
      document.getElementById('navbar-links')
         .classList
            .toggle('show-links');
   };

   useEffect(() => {
      const bgmenu = document.getElementById('burger-menu');
      document.querySelectorAll('#navbar-wrapper a')
         .forEach(link => link.addEventListener('click', () => bgmenu.click()))
      if (matchMedia('(min-width: 768px)').matches) {
         window.onscroll = function() {
            const IDS = ['profile-link', 'navbar-links', 'logout-btn'];
            IDS.forEach(id => linksOnScrollAnim(id, this.oldScroll, this.scrollY));
            this.oldScroll = this.scrollY
         };
      };
   }, []);

   let { isauth, username, picture } = state;

   const profredirect = {
      pathname: isauth ? `/users/${username}` : '/',
      state: { exists: true }}
   
   return (
      <div id="navbar-wrapper">
         <BurgerMenu clickCallback={linksAnimations} />
         <Link to={profredirect} id="profile-link">
            <figure>
               <img
                  {...isauth && { className: 'user-rounded-picture' }}
                  src={isauth ? picture : volgalogo}
                  alt="navbar-user-pic"
               />
            </figure>
         </Link>
         <NavBarLinks isauth={isauth}/>
         {isauth &&
            <img
               id="logout-btn"
               src={logouticon}
               alt="logout-icon"
               onClick={logOut}
            />}
      </div>
   );

};

export default NavBar;

// Terminado, nada más que revisar...