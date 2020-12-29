import React, { Component } from 'react';
import { SNInputAnimationSetter } from '../local-utils';
import { capitalize } from '../../../utils/tools';
import checkIcon from '../../../assets/SocialNets/check-icon.svg';
import { snicons } from '../../../assets/';
import './SocialNetInput.css';

class SocialNetInput extends Component {

   name = this.props.name;

   Name = capitalize(this.name);
   
   render() {
      return (
         <div className='social-network'>
            <figure id='logo-wrapper'>
               <img src={snicons[this.name]} alt={`${this.name}-icon`}/>
            </figure>
            <div id='div-line'/>
            <div id='data-input'>
               <input
                  type='text'
                  maxLength='30'
                  placeholder={this.Name !== 'Email' ? this.Name : 'Correo electrónico'}
                  name={this.name}
                  autoComplete='off'
                  onChange={this.props.onChange}
               />
               <img src={checkIcon} alt='check-icon'/>
            </div>
            <h1>{this.name !== 'email' ? this.Name : 'Correo'}</h1>
         </div>
      );
   };
   
   componentDidMount() {
      const socialnetworks = document.getElementsByClassName('social-network');
      Object.entries(socialnetworks).map(
         socialnet => SNInputAnimationSetter(socialnet)
      );
   };

};

export default SocialNetInput;
