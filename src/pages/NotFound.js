import React from 'react';
import { Link } from 'react-router-dom';
import notfoundicon from '../assets/NotFound/404.svg';
import './styles/NotFound.css';

const NotFound = () => (
   <div id="not-found">
      <img src={notfoundicon} alt="404-icon" />
      <h3>
         La página que has solicitado no existe.
      </h3>
      <Link to="/">Ir al inicio</Link>
   </div>
);

export default NotFound;