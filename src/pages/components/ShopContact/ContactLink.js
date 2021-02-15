import React, { Component } from "react";
import { capitalize } from '../../../utils/tools';
import { sncolors } from '../local-utils';
import './ContactLink.css';

class ContactLink extends Component {

   for = this.props.for;
   url = this.props.url;

   render() {
      return (
         <a className={`contact-link ${this.for}-link`}
            target="_blank" rel="noopener noreferrer"
            {...this.url && { href: this.url }}>
            <i className={
               this.for !== 'email' ?
                  `fab fa-${this.for}` :
                  'fas fa-envelope-open-text'
            } />
            {this.url ?
               <div className="fake-before" /> :
               <p>Red no registrada</p>}
            <h3>{capitalize(this.for)}</h3>
         </a>
      );
   };

   componentDidMount() {
      let link = document.querySelector(`.${this.for}-link`),
         bg = '';
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
      if (this.url) {
         link.querySelector('.fake-before').style.background = bg;
      } else {
         link.classList.add('nonet');
         link.addEventListener('mouseover', function () {
            this.style.color = 'black';
         })
      };
   };

};

export default ContactLink;
