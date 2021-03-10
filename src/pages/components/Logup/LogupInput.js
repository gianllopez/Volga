import React, { useContext } from 'react';
import { Input } from '../';
import { logupContext } from '../../Logup';
import './LogupInput.css';

function LogupInput(props) {

   const GENDERS = ['Masculino', 'Femenino', 'No definido'];

   const ctxProps = {...useContext(logupContext), ...props};

   return (
      props.name !== 'gender' ?
         <Input {...ctxProps} /> :
         <Input {...ctxProps}>
            <select
               id="gender-select"
               name={ctxProps.name}
               onChange={ctxProps.onChange}>
               {GENDERS.map((gender, i) => 
                  <option value={gender} key={i}>
                     {gender}
                  </option>)}
            </select>
         </Input>
   );
};

export default LogupInput;

// terminado