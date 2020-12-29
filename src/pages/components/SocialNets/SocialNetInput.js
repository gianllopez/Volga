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
            <figure className='logo-wrapper'>
               <img src={snicons[this.name]} alt={`${this.name}-icon`}/>
            </figure>
            <div className='div-line'/>
            <div className='data-input'>
               <input
                  type='text'
                  maxLength='30'
                  placeholder={this.Name !== 'Email' ? this.Name : 'Correo'}
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
      const snwrapper = this._reactInternalFiber.child.stateNode;
      SNInputAnimationSetter(snwrapper);
   };

};

export default SocialNetInput;
