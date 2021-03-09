import React, { Component } from 'react';
import { changeValidator } from '../../../utils/validators';
import './styles/Input.css';

class Input extends Component {

   state = { error: false };

   onChangeExtension = event => {
      let { maxLength, regex, onChange } = this.props,
      value = changeValidator(event, maxLength, onChange);
      if (regex && !regex.test(value)) {
         event.target.value = value.substring(0, value.length - 1);
      };
      onChange(event);
   };

   spanErrorAnimation = () => {
      setTimeout(() =>
         document.querySelector(`span.${this.props.name}-error`)
            .style.transform = 'initial', 1);
   };

   render() {
      let { name, type, label, allowblank,
            errors, children, minLength } = this.props;
      return (
         <div className={`input-wrapper ${name}`}>
            <label htmlFor={name}>
               {label}: {!allowblank && <span>*</span>}
            </label>
            {children ? children : 
               <input
                  id={name}
                  name={name}
                  spellCheck="false"
                  autoComplete="off"
                  type={type || 'text'}
                  onChange={this.onChangeExtension}
                  minLength={minLength}
               />}
            {this.state.error && 
               <span className={`${name}-error`}>
                  {errors[name]}
               </span>}
         </div>
      );
   };

   componentDidUpdate() {
      let { errors, name } = this.props,
      error = errors[name] ? true : false;
      if (error && !this.state.error) {
         this.setState({ error }, this.spanErrorAnimation);
      };
   };

};

export default Input;

// Terminado, nada más que revisar...