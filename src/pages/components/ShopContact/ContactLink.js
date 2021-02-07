import React, { Component } from "react";
import { capitalize } from '../../../utils/tools';
import { sncolors } from '../local-utils';
import './ContactLink.css';

class ContactLink extends Component {

   for = this.props.for;

   render() {
      return (
         <a className={`contact-link ${this.for}-link`} href={`${this.props.url}`}
               target="_blank" rel="noopener noreferrer">
            <i className={
               this.for !== 'email' ?
                  `fab fa-${this.for}` :
                  'fas fa-envelope-open-text'
            }/>
            <div className="fake-before"/>
            <h3>{capitalize(this.for)}</h3>
         </a>
      );
   };

   componentDidMount() {
      const link = document.querySelector(`.${this.for}-link`);
      let bg = '';
      if (this.for !== 'instagram') {
         bg = sncolors[this.for];
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

};

export default ContactLink;
