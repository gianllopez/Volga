import React, { Component } from 'react';
import { Input } from '../';
import { logupContext } from '../../Logup';
import './LogupInput.css';

class LogupInput extends Component {

   static contextType = logupContext;

   GENDERS = ['Masculino', 'Femenino', 'No definido', 'Prefiero no especificarlo']

   render() {
      let default_props = {
         onChange: this.context.changeHandler,
         errors: this.context.errors,
         ...this.props
      };
      return (
         this.props.name !== 'gender' ?
            <Input {...default_props} /> :
            <Input {...default_props}>
               <select
                  id="gender-select"
                  name={default_props.name}
                  onChange={default_props.onChange}>
                  {this.GENDERS.map((gender, i) => (
                     <option value={gender} key={i}>{gender}</option>
                  ))}
               </select>
            </Input>
      );
   };

};

export default LogupInput;
