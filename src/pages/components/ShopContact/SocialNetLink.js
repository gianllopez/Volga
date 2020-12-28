import React, { Component, ReactNodeArray } from "react";
import { Link } from 'react-router-dom';
import { snicons } from '../../../assets/';
import './SocialNetLink.css';

class SocialNetLink extends Component {

   for = this.props.for !== 'email' ? this.props.for : 'Correo';
   For = this.for.charAt(0).toUpperCase() + this.for.substring(1);

   render() {
      return (
         <Link className="sn-link" to="/">
            <i className={
               this.for !== 'Correo' ?
                  `fab fa-${this.props.for}` :
                  'fas fa-envelope-open-text'
            }/>
            <h3>{this.For}</h3>
         </Link>
      );
   };
}

export default SocialNetLink;
