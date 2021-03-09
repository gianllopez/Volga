import React, { useEffect, useState } from 'react';
import { changeValidator } from '../../../utils/validators';
import './styles/Input.css';

function Input(props) {

   const [error, setError] = useState(false);

   let { name, type, label, allowblank,
         errors, children, minLength } = props;

   const onChangeExtension = event => {
      let { maxLength, regex, onChange } = props,
      value = changeValidator(event, maxLength, onChange);
      if (regex && !regex.test(value)) {
         event.target.value = value.substring(0, value.length - 1);
      };
      onChange(event);
   };

   const spanErrorAnimation = () => {
      setTimeout(() =>
         document.querySelector(`span.${name}-error`)
            .style.transform = 'initial', 1);
   };

   useEffect(() => {      
      if (errors[name]) {
         setError(true);
         spanErrorAnimation();
      };
   }, [error, errors]);

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
               onChange={onChangeExtension}
               minLength={minLength}
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