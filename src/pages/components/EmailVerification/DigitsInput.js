import React from 'react';
import './DigitsInput.css';

function DigitsInput({ onChange, ...rest}) {

   const onChangeEntry = event => {
      let { nextElementSibling, value } = event.target;
      if (nextElementSibling) {
         nextElementSibling.focus();
      };
      if (value.length > 1) {
         event.target.value = value.substring(0, 1);
      };
      onChange(event);
   };
   
   return (
      <div id="digits-input">
         {[...Array(6).keys()].map((index) => 
            <input
               {...rest}
               key={index}
               type="number"
               onChange={onChangeEntry}
               data-pos={index}
               className="digit-entry"/>)}
      </div>
   )
};

export default DigitsInput;