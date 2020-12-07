import React, { Component } from 'react';
import './styles/Input.css';

class Input extends Component {
   
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
            {this.props.badentry && (
               <span>
                  {this.props.errorsobj[this.props.name]}
               </span>
            )}
         </div>
      );
   };

   componentDidUpdate() {
      const badEntry = Object.keys(this.props.errorsobj || {}).includes(this.props.name);
      if (badEntry) {
         this.setState({ badentry: true });
      };
   };

};

Input.defaultProps = {
   type: 'text'
}

export default Input;
