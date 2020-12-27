import React, { Component, Fragment } from 'react';
import { NavBar } from './components';
import opsheader from '../assets/NewOpinion/users-opinions.svg';
import './styles/NewOpinion.css';

class NewOpinion extends Component {
   render() {
      return (
         <Fragment>
            <NavBar/>
            <form id="opinion-form">
               <div id="op-header">
                  <figure>
                     <img src={opsheader} alt="opsheader-icon"/>
                  </figure>
                  <h2>Opina sobre *shop*</h2>
                  <p>Déjalos saber que piensas</p>
               </div>
               <div id="op-entries">
                  

               </div>            
            </form>
         </Fragment>
      );
   };
};

export default NewOpinion;
