import React, {Component} from 'react';
import animationSetter from './local.utils';
import checkIcon from '../../assets/SocialNets/check-icon.svg';
import {snicons} from '../../utils/assets-exports';
import './styles/SocialNetInput.css';

class SocialNetInput extends Component {

   name = this.props.name;

   Name = this.name.charAt(0).toUpperCase() + this.name.substring(1);

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
                  placeholder={this.Name}
                  name={this.name}
                  autoComplete='off'
                  onChange={this.props.onChange}
               />
               <img src={checkIcon} alt='check-icon'/>
            </div>
            <h1>{this.Name}</h1>
         </div>
      );
   }
   
   componentDidMount() {
      const socialnetworks = document.getElementsByClassName('social-network');
      Object.entries(socialnetworks).map(
         socialnet => animationSetter(socialnet)
      );
   };

};

export default SocialNetInput;
