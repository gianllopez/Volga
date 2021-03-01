import React, { Component } from 'react';
import { CNcontext } from '../../ContactNetworks';
import { capitalize } from '../../../utils/tools';
import { CN_COLORS } from '../local-utils';
import { cn_icons } from '../../../assets';
import checkIcon from '../../../assets/ContactNetworks/check-icon.svg';
import './ContactNetworkInput.css';

class ContactNetworkInput extends Component {

   state = {};

   static contextType = CNcontext;

   onFilledAnimation = () => {
      const colors = {...CN_COLORS, instagram: '#C32AA3'}
      let { input, dataInput, header } = this, { value } = input;
      dataInput.classList.remove('data-input-anim');
      header.classList.remove('header-anim');
      if (!this.state.error) {
         header.innerText = value ? value : input.placeholder;
         header.style.color = value ? colors[input.name] : 'initial';
      };
   };

   inputAnimation = () => {
      let { stateNode } = this._reactInternalFiber.child;
      this.input = stateNode.querySelector('input');
      this.dataInput = this.input.parentElement;
      this.header = stateNode.children[3];
      if (this.input !== document.activeElement) {
         this.header.classList.toggle('header-anim');
         this.dataInput.classList.toggle('data-input-anim');
      };
      this.input.addEventListener('keydown', event => {
         if (event.keyCode === 13) {
            this.onFilledAnimation();
         };
      });
   };

   checkbtnAnimation = event => {
      event.stopPropagation();
      this.onFilledAnimation();
   };

   regexValidator = event => {
      let { regex } = this.props, { value } = event.target;
      if (regex && !regex.test(value)) {
         event.target.value = value.substring(0, value.length - 1);
      };
      this.context.changeHandler(event);
   };

   render() {
      let { name, maxLength } = this.props,
      Name = capitalize(name);
      return (
         <div className={`contact-network-input ${this.name}`} onClick={this.inputAnimation}>
            <figure className="logo-wrapper">
               <img src={cn_icons[name]} alt={`${name}-icon`} />
            </figure>
            <div className="div-line" />
            <div className="data-input">
               <input
                  type="text"
                  name={name}
                  spellCheck="false"
                  autoComplete="off"
                  onChange={this.regexValidator}
                  placeholder={Name !== "Email" ? Name : "Correo"}
                  maxLength={maxLength}
               />
               <img src={checkIcon} alt="check-icon" onClick={this.checkbtnAnimation}/>
            </div>
            {!this.state.error ? 
               <h1>{this.name !== "email" ? Name : "Correo"}</h1> :
               <p className="cn-error">{this.state.error}</p>}
         </div>
      );
   };

   componentDidUpdate() {
      let error = this.context.errors[this.props.name];
      if (error && !this.state.error) {
         this.setState({ error });
      };
   };

};

export default ContactNetworkInput;

/* REVISADO Y NO HAY MÁS QUE RESUMIR: 28/02/2021 */