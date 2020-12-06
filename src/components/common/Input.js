import React, { Component } from 'react';
import './styles/Input.css';

class Input extends Component {
   render() {
      return (
         <div className="input-wrapper">
            <label htmlFor={this.props.id}>
               {this.props.label} <span style={{color: 'red'}}>*</span>
            </label>
            <input
               {...this.props}
               id={this.props.name}
            />
         </div>
      );
   };
};

export default Input;
