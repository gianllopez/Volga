import React, { Component } from 'react';
import logupContext from '../../utils/contexts';
import './styles/Input.css';

class Input extends Component {
   
   isError = () => Object.keys(this.context.errors || {}).includes(this.props.name);
   
   static contextType = logupContext;

   render() {
      return (
         <div className={`input-wrapper ${this.props.name}`}>
            <label htmlFor={this.props.id}>
               {this.props.label}: {this.props.name !== 'address' && 
                  <span style={{color: 'red'}}>*</span>
               }
            </label>
            <input
               {...this.props}
               id={this.props.name}
               autoComplete="off"
            />
            {this.isError() && (
               <span>
                  {this.context.errors[this.props.name]}
               </span>
            )}
         </div>
      );
   };

   componentDidUpdate() {      
      if (this.isError()) {
         setTimeout(
            () => document.querySelector(`.${this.props.name} > span`)
                     .style.transform = 'initial', 100
            );
      };
   };

};

Input.defaultProps = {
   type: 'text'
}

export default Input;
