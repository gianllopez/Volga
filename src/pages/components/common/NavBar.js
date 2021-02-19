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
      username: '', picture: ''
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
            <Link to={isauth ? `/users/${username}` : '#'}>
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
      let { isauth, username, picture } = this.state;
      if (isauth) {
         let globalUI = localStorage.getItem('for-global-ui');
         if (!globalUI) {
            api.get('/get-data/for-global-ui')
               .then(({ data }) => {
                  this.setState({ ...data }, () => {
                     localStorage.setItem('for-global-ui', JSON.stringify(data))
                  });
               });
         } else {
            if (!username || !picture) {
               this.setState({...JSON.parse(globalUI)});
            };
         };
      };
      if (matchMedia('(max-width:767px)').matches) {
         document.querySelectorAll('#navbar-wrapper a')
            .forEach(el => 
               el.addEventListener('click', function() {
                  this.parentElement.parentNode.classList.remove('show-links');
                  document.querySelector('#burger-menu').click();
               }));
      };
   };

};

export default NavBar;
