import React, { Component } from 'react';
import './styles/Input.css';

class Input extends Component {
   render() {
      return (
         <div className="input-wrapper">
            <input {...this.props}/>
         </div>
      );
   };
};

export default Input;
