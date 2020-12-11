import React, { Component } from 'react';
import './styles/Input.css';

class Input extends Component {

   state = {
      error: false
   };
   
   render() {
      return (
         <div className={`input-wrapper ${this.props.name}`}>
            <label htmlFor={this.props.name}>
               {this.props.label}: {this.props.name !== 'address' && 
                  <span style={{color: 'red'}}>*</span>}
            </label>
            <input
               {...this.props}
               type={this.props.name !== 'foundation' ? this.props.type : 'date'}
               id={this.props.name}
               autoComplete="off"
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
      let bad = Object.keys(this.props.errors || {}).includes(this.props.name);
      if (bad && !this.state.error) {
         this.setState({ error: true }, () => {
            setTimeout(
               () => document.querySelector(`.${this.props.name}-error`)
                        .style.transform = 'initial', 1)
         });              
      };
   };

   componentDidMount() {
      if (this.props.name === 'foundation') {
         document.querySelector('input[type="date"]')
            .valueAsDate = new Date();
       }
   };
   
};

Input.defaultProps = {
   type: 'text'
}

export default Input;
