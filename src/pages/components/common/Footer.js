import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles/Footer.css';

class Footer extends Component {

   state = {};

   NetworkLink = props => {
      let { network, username } = props;
      return (
         <a href={`https://${network}.com/${username}`}
            target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${network}-square`}/>
         </a>
      );
   };

   render() {
      return (
         <div id="footer-wrapper" {...this.state.atbottom && {className: 'at-bottom'}}>
            <section id="my-social-contact">
               {['twitter', 'github', 'facebook', 'instagram']
                  .map((sn, index) => 
                     <this.NetworkLink
                        username={sn !== 'facebook' ? 'gianlop3z' : 'therealgoat01'}
                        network={sn}
                        key={index} />)}
            </section>
            <div id="contact-me">
               <p>lopezarizagianlucas@gmail.com</p>
               <p>+57 302-223-6578</p>
               <p>gianlucasla@hotmail.com</p>
            </div>
            <p id="copyright">Volga by Gian López © 2020</p>
         </div>
      );
   };

};

export default withRouter(Footer);
