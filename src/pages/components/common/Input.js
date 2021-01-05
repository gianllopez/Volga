import React, { Component } from 'react';
import './styles/Input.css';

class Input extends Component {

   state = {
      error: false
   };
   
   render() {
      const {name, type, label, allowblank, changeHandler, onKeyDown} = this.props;
      return (
         <div className={`input-wrapper ${name}`}>
            <label htmlFor={this.props.name}>
               {label}: {!allowblank && <span>*</span>}
            </label>
            <input
               type={type || 'text'}
               id={name}
               autoComplete="off"
               spellCheck="false"
               {...this.props}
               errors={undefined}
            />
            {this.state.error && (
               <span className={`${this.props.name}-error`}>
                  {this.props.errors[this.props.name]}
               </span>
            )}
         </div>
      );
   };

   componentDidUpdate() {
      let gotError = this.props.errors[this.props.name];
      if (gotError && !this.state.error) {
         this.setState({ error: true });
         setTimeout(() => {
            document.querySelector(`.${this.props.name}-error`)
               .style.transform = 'initial';
         }, 1);
      };
   };

   componentDidMount() {
      if (this.props.name === 'foundation') {
         document.querySelector(`.${this.props.name} input[type="date"]`)
            .valueAsDate = new Date();
      };
   };
   
};

Input.defaultProps = {
   type: 'text'
}

export default Input;
