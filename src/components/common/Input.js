import React, { Component } from 'react';
import logupContext from '../../utils/contexts';
import './styles/Input.css';

class Input extends Component {

   state = {
      error: false,
   };

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
            {this.state.error && (
               <span>
                  {this.context.errors[this.props.name]}
               </span>
            )}
         </div>
      );
   };

   componentDidUpdate() {
      let bad = Object.keys(this.context.errors).includes(this.props.name);
      if (bad && !this.state.error) {
         this.setState({ error: true });                     
      };
   };
   
};

Input.defaultProps = {
   type: 'text'
}

export default Input;
