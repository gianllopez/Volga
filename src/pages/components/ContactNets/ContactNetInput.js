import React, { Component } from 'react';
import { SNInputAnimationSetter } from '../local-utils';
import { capitalize } from '../../../utils/tools';
import checkIcon from '../../../assets/ContactNets/check-icon.svg';
import { snicons } from '../../../assets';
import './ContactNetInput.css';

class ContactNetInput extends Component {



   state = {x: false}
   name = this.props.name;

   Name = capitalize(this.name);
   
   render() {
      return (
         <div className='contact-net'>
            <figure className='logo-wrapper'>
               <img src={snicons[this.name]} alt={`${this.name}-icon`}/>
            </figure>
            <div className='div-line'/>
            <div className='data-input'>
               <input
                  type='text'
                  name={this.name}
                  autoComplete='off'
                  placeholder={this.Name !== 'Email' ? this.Name : 'Correo'}
                  onChange={this.props.onChange}
                  {...this.props}
               />
               <img src={checkIcon} alt='check-icon'/>
            </div>
            <h1>{this.name !== 'email' ? this.Name : 'Correo'}</h1>
         </div>
      );
   };
   
   componentDidMount() {
      let snwrapper = this._reactInternalFiber.child.stateNode;
      this.snQuery = q => snwrapper.querySelector(q);
      const childs = {
         header: this.snQuery('h1'),
         dataInput: this.snQuery('.data-input'),
         input: this.snQuery('input'),
         checkBtn: this.snQuery('.data-input > img')
      };
      SNInputAnimationSetter(snwrapper, childs);
   };

   componentDidUpdate() {
      const fsizeOnOflow = {
         instagram: 16,
         facebook: 13,
         email: 10
      };
      let h1 = this.snQuery('h1');
      if (h1.offsetHeight > 75) {
         h1.style.fontSize = fsizeOnOflow[this.name]
      };

   };

};

export default ContactNetInput;
