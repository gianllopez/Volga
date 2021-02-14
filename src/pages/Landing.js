import React from 'react';
import { Link } from 'react-router-dom';
import landinghero from '../assets/Landing/landing-hero.jpg';
import './styles/Landing.css';

function Landing(props) {
   return (
      <div id="landing-page">
         <figure>
            <img src={landinghero} alt="landing-hero" />
         </figure>
         <section>
            <h2>¡Bienvenido a Volga!</h2>
            <p>¿Qué esperas para registrarte?</p>
            <p>Empieza a vender tus productos</p>
            <Link to="/logup">
               <button>Registrarme</button>
            </Link>
         </section>
      </div>
   );
};

export default Landing;
