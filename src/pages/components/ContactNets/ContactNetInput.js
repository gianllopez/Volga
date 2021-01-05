import React, { Component } from 'react';
import { ContactNetInputAnimationSetter } from '../local-utils';
import { capitalize } from '../../../utils/tools';
import checkIcon from '../../../assets/ContactNets/check-icon.svg';
import { snicons } from '../../../assets';
import './ContactNetInput.css';

class ContactNetInput extends Component {

   state = {}

   render() {
      const {name} = this.props,
      Name = capitalize(name);
      this.name = name;
      return (
         <div className='contact-net'>
            <figure className='logo-wrapper'>
               <img src={snicons[name]} alt={`${name}-icon`}/>
            </figure>
            <div className='div-line'/>
            <div className='data-input'>
               <input
                  type='text'
                  name={name}
                  autoComplete='off'
                  placeholder={Name !== 'Email' ? Name : 'Correo'}
                  {...this.props}
               />
               <img src={checkIcon} alt='check-icon'/>
            </div>
            <h1>{this.name !== 'email' ? this.Name : 'Correo'}</h1>
         </div>
      );
   };
   
   componentDidMount() {
      let cntctWrapper = this._reactInternalFiber.child.stateNode;
      this.cntctQuery = q => cntctWrapper.querySelector(q);
      const childs = {
         header: this.cntctQuery('h1'),
         dataInput: this.cntctQuery('.data-input'),
         input: this.cntctQuery('input'),
         checkBtn: this.cntctQuery('.data-input > img')
      };
      ContactNetInputAnimationSetter(cntctWrapper, childs);
   };

};

export default ContactNetInput;
