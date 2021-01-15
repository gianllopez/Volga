import React, { Component } from 'react';
import { CNcontext } from '../../ContactNetworks';
import { ContactNetworkInputAnimationSetter } from '../local-utils';
import { capitalize } from '../../../utils/tools';
import checkIcon from '../../../assets/ContactNetworks/check-icon.svg';
import { cn_icons } from '../../../assets';
import './ContactNetworkInput.css';

class ContactNetworkInput extends Component {

   state = {};

   static contextType = CNcontext;

   keyDownHandler = ({ target }) => {
      const { value } = target,
         regex = /^[a-z0-9]*$/g;
      if (!regex.test(value)) {
         target.value = value.substring(0, (value.length - 1));
      };

   };

   render() {
      const { name } = this.props,
         Name = capitalize(name);
      this.name = name;
      return (
         <div className={`contact-network-input ${this.name}`}>
            <div className="cni-content">
               <figure className='logo-wrapper'>
                  <img src={cn_icons[name]} alt={`${name}-icon`} />
               </figure>
               <div className='div-line' />
               <div className='data-input'>
                  <input
                     type='text'
                     name={name}
                     autoComplete='off'
                     placeholder={Name !== 'Email' ? Name : 'Correo'}
                     onKeyDown={this.keyDownHandler}
                     onChange={this.context.changeHandler}
                     {...this.props}
                  />
                  <img src={checkIcon} alt='check-icon' />
               </div>
               <h1>{this.name !== 'email' ? Name : 'Correo'}</h1>
            </div>
            {this.state.error && (
               <p className="cn-error">
                  {this.state.error}
               </p>
            )}
         </div>
      );
   };

   componentDidMount() {
      this.cntctWrapper = this._reactInternalFiber.child.stateNode;
      this.selfQuery = q => this.cntctWrapper.querySelector(q);
      this.childs = {
         header: this.selfQuery('h1'),
         dataInput: this.selfQuery('.data-input'),
         input: this.selfQuery('input'),
         checkBtn: this.selfQuery('.data-input > img')
      };
      ContactNetworkInputAnimationSetter(this.cntctWrapper, this.childs);
   };

   componentDidUpdate() {
      let error = this.context.errors[this.name];
      if (error && !this.state.error) {
         this.setState({ error });
         setTimeout(
            () => {
               this.selfQuery('.cn-error').style.transform = 'initial';
               this.selfQuery('.cni-content').style.borderRadius = '7px 7px 0px 0px';
            }, 1);
      };
   };

};

export default ContactNetworkInput;
