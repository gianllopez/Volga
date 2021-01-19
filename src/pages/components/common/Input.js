import React, { Component } from 'react';
import './styles/Input.css';

class Input extends Component {

   state = { error: false };

   render() {
      const { name, type, label, allowblank, errors, children } = this.props;
      this.name = name; this.errors = errors;
      return (
         <div className={`input-wrapper ${name}`}>
            <label htmlFor={name}>
               {label}: {!allowblank && <span>*</span>}
            </label>
            {children ? children : (
               <input
                  type={type || 'text'}
                  id={name}
                  autoComplete="off"
                  spellCheck="false"
                  {...this.props}
                  errors={undefined}
               />
            )}
            {this.state.error && (
               <span className={`${name}-error`}>
                  { errors[name]}
               </span>
            )}
         </div>
      );
   };

   componentDidUpdate() {
      let gotError = this.errors[this.name];
      if (gotError && !this.state.error) {
         this.setState({ error: true });
         setTimeout(() => {
            document.querySelector(`.${this.name}-error`)
               .style.transform = 'initial';
         }, 1);
      };
   };

   componentDidMount() {
      if (this.name === 'foundation') {
         document.querySelector(`.${this.name} input[type="date"]`)
            .valueAsDate = new Date();
      };
   };

};

export default Input;
