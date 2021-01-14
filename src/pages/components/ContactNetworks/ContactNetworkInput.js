import React, { Component } from 'react';
import { CNcontext } from '../../ContactNetworks';
import { ContactNetworkInputAnimationSetter } from '../local-utils';
import { capitalize } from '../../../utils/tools';
import checkIcon from '../../../assets/ContactNetworks/check-icon.svg';
import { cn_icons } from '../../../assets';
import './ContactNetworkInput.css';

class ContactNetworkInput extends Component {

   static contextType = CNcontext;

   render() {
      const {name} = this.props,
      Name = capitalize(name);
      this.name = name;
      return (
         <div className='contact-network-input'>
            <figure className='logo-wrapper'>
               <img src={cn_icons[name]} alt={`${name}-icon`}/>
            </figure>
            <div className='div-line'/>
            <div className='data-input'>
               <input
                  type='text'
                  name={name}
                  autoComplete='off'
                  placeholder={Name !== 'Email' ? Name : 'Correo'}
                  onChange={this.context.changeHandler}
                  {...this.props}                  
               />
               <img src={checkIcon} alt='check-icon'/>
            </div>
            <h1>{this.name !== 'email' ? Name : 'Correo'}</h1>
         </div>
      );
   };
   
   componentDidMount() {
      let cntctWrapper = this._reactInternalFiber.child.stateNode;
      this.selfQuery = q => cntctWrapper.querySelector(q);
      const childs = {
         header: this.selfQuery('h1'),
         dataInput: this.selfQuery('.data-input'),
         input: this.selfQuery('input'),
         checkBtn: this.selfQuery('.data-input > img')
      };
      ContactNetworkInputAnimationSetter(cntctWrapper, childs);
   };

};

export default ContactNetworkInput;
