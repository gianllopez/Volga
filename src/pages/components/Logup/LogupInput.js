import React, { Component } from 'react';
import { Input } from '../';
import { logupContext } from '../../Logup';
import './LogupInput.css';

class LogupInput extends Component {

   static contextType = logupContext;

   default_props = {
      onChange: this.context.changeHandler,
      errors: this.context.errors,
      ...this.props
   };

   GENDERS = ['Masculino', 'Femenino', 'No definido', 'Prefiero no decirlo']

   render = () => (
      this.props.name !== 'gender' ?
         <Input {...this.default_props} /> :
         <Input {...this.default_props}>
            <select
               id="gender-select"
               name={this.default_props.name}
               onChange={this.default_props.onChange}>
               {this.GENDERS.map((gender, i) => (
                  <option value={gender} key={i}>{gender}</option>
               ))}
            </select>
         </Input>
   );

};

export default LogupInput;
