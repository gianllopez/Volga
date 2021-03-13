import React, { useEffect, useState } from 'react';
import { changeValidator } from '../../../utils/validators';
import './styles/Input.css';

function Input(props) {

   const [error, setError] = useState(false);

   let { name, type, label, allowblank, errors, children,
         minLength, maxLength, regex, onChange } = props;

   const onChangeExtension = event => {
      let value = changeValidator(event, maxLength, onChange, true);
      if (regex && !regex.test(value)) {
         event.target.value = value.substring(0, value.length - 1);
      };
      onChange(event);
   };

   useEffect(() => {      
      if (errors[name]) {
         setError(true);
         setTimeout(() =>
            document.querySelector(`span.${name}-error`)
               .style.transform = 'initial', 50);
      };
   }, [errors, name]);

   return (
      <div className={`input-wrapper ${name}`}>
         <label htmlFor={name}>
            {label}: {!allowblank && <span>*</span>}
         </label>
         {children ? children : 
            <input
               id={name}
               name={name}
               spellCheck="false"
               autoComplete="off"
               type={type || 'text'}
               minLength={minLength}
               autoCapitalize="off"
               onChange={onChangeExtension}
            />}
         {error && 
            <span className={`${name}-error`}>
               {errors[name]}
            </span>}
      </div>
   );

};

export default Input;

// Terminado, nada más que revisar...