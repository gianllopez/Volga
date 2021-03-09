import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import volgalogo from '../../../assets/common/logo.svg';
import logouticon from '../../../assets/common/logout-icon.svg';
import BurgerMenu from './BurgerMenu';
import { isAuthenticated } from '../../../utils/routing-tools'
import SearchLink from './SearchLink';
import './styles/NavBar.css';

class NavBar extends Component {

   render() {
      let { isauth, username, picture } = this.state;
      
   };

   componentDidMount() {
      document.querySelectorAll('#navbar-wrapper a')
         .forEach(el => 
            el.addEventListener('click', function() {
               if (el.id !== 'profile-link') {
                  document.querySelector('#burger-menu').click();
               } else {
                  let { classList } = document.querySelector('#navbar-links');
                  if (classList.contains('show-links')) {
                     document.querySelector('#burger-menu').click();
                  };
               };
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
                  }; return element;
               });
            this.oldScroll = this.scrollY;
         };
      };
   };

};

function NavBar(props) {

   const [state, setState] = useState({
      isauth: isAuthenticated(),
      ...JSON.parse(localStorage.getItem('uiprev'))});

   const linksAnimations = () => {
      document.getElementById('navbar-links')
         .classList
            .toggle('show-links');
   };

   const logOut = () => {
      window.location = '/';
      localStorage.clear();
   };

   let { isauth, username, picture } = state;

   return (
      <div id="navbar-wrapper">
         <BurgerMenu clickCallback={this.linksAnimations} />
         <Link to={{
            pathname: isauth ? `/users/${username}` : '',
            state: {exists: true}}} id="profile-link">
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
                  <Link to="/logup">Registrar</Link>
                  <Link to="/login">Iniciar sesión</Link>
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



export default NavBar;
