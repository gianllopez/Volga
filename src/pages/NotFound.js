import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { noFooterPaths } from '../utils/routing-tools';
import notfoundicon from '../assets/NotFound/404.svg';
import './styles/NotFound.css';

class NotFound extends Component {
   render() {
      return (
         <div id="not-found">
            <img src={notfoundicon} alt="404-icon" />
            <h3>
               La página que has solicitado no existe.
            </h3>
            <Link to="/">Ir al inicio</Link>
         </div>
      );
   };
   componentDidMount() {
      document.title = 'Página no encontrada';
      if (!noFooterPaths.includes(this.props.path)) {
         let footer = document.querySelector('#footer-wrapper');
         if (footer) {
            footer.style.display = 'none';
         };
      };
   };
};

export default NotFound;