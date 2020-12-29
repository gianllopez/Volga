import React, { Component, ReactNodeArray } from "react";
import { Link } from 'react-router-dom';
import { sncolors } from '../../components/local-utils';
import './SocialNetLink.css';

class SocialNetLink extends Component {

   for = this.props.for !== 'email' ? this.props.for : 'Correo';

   render() {
      return (
         <Link className={`sn-link ${this.for}-link`} to="/">
            <i className={
               this.for !== 'Correo' ?
                  `fab fa-${this.props.for}` :
                  'fas fa-envelope-open-text'
            }/>
            <div className="fake-before"/>
            <h3>{this.for.charAt(0).toUpperCase() + this.for.substring(1)}</h3>
         </Link>
      );
   };

   componentDidMount() {
      const link = document.querySelector(`.${this.for}-link`);
      let bg = '';
      if (this.for !== 'instagram') {
         bg = sncolors[this.props.for];
      } else {
         bg = `linear-gradient(
                  90deg, 
                  #845ec2 0%,
                  #d65db1 50%,
                  #ff6f91 100%
               )`;
      };
      link.querySelector('.fake-before').style.background = bg;
   };
}

export default SocialNetLink;
