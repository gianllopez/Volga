import React, { Component } from 'react';
import { capitalize } from '../ContactNetworks/ContactNetworkInput';
import { CN_COLORS } from '../local-utils';
import './ContactLink.css';

class ContactLink extends Component {

   render() {
      let { way, url } = this.props;
      return (
         <a className={`contact-link ${way}-link`}
            target="_blank" rel="noopener noreferrer"
            {...url && { href: url }}>
            <i className={
               way !== 'email' ?
                  `fab fa-${way}` :
                  'fas fa-envelope-open-text'}/>
            {url ?
               <div className="fake-before"/> :
               <p>Red no registrada</p>}
            <h3>{capitalize(way)}</h3>
         </a>
      );
   };

   componentDidMount() {
      let { way, url } = this.props,
      link = document.querySelector(`.${way}-link`),
      bg = '';
      if (way !== 'instagram') {
         bg = CN_COLORS[way];
      } else {
         bg = `linear-gradient(
                  90deg, 
                  #845ec2 0%,
                  #d65db1 50%,
                  #ff6f91 100%
               )`;
      };
      if (url) {
         link.querySelector('.fake-before').style.background = bg;
      } else {
         link.classList.add('nonet');
         link.addEventListener('mouseover', function () {
            this.style.color = 'black';
         });
      };
   };

};

export default ContactLink;
