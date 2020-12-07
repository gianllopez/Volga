import React, { Component } from 'react';
import logupContext from '../../utils/contexts';
import './styles/Input.css';

class Input extends Component {

   state = {};

   static contextType = logupContext;

   render() {
      return (
         <div className="input-wrapper">
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
            {this.error && (
               <span>
                  {this.context.errors[this.props.name]}
               </span>
            )}
         </div>
      );
   };

   componentDidUpdate() {
      let bad = Object.keys(this.context.errors).includes(this.props.name);
      if (bad) {
         //this.setState({ error: true });
         console.log(document.querySelector('.input-wrapper span'))
            
      };
   };

};

Input.defaultProps = {
   type: 'text'
}

export default Input;
