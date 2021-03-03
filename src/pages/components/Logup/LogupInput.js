import React, { Component } from 'react';
import { Input } from '../';
import { logupContext } from '../../Logup';
import './LogupInput.css';

class LogupInput extends Component {

   static contextType = logupContext;

   GENDERS = ['Masculino', 'Femenino', 'No definido']

   render() {
      let ctxprops = {...this.context, ...this.props};
      return (
         this.props.name !== 'gender' ?
            <Input {...ctxprops} /> :
            <Input {...ctxprops}>
               <select
                  id="gender-select"
                  name={ctxprops.name}
                  onChange={ctxprops.onChange}>
                  {this.GENDERS.map((gender, i) => 
                     <option value={gender} key={i}>
                        {gender}
                     </option>)}
               </select>
            </Input>
      );
   };
};

export default LogupInput;

// terminado