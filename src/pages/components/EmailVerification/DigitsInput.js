import React from 'react';
import './DigitsInput.css';

function DigitsInput({ onChange, ...rest}) {

   const onChangeEntry = event => {
      let { value } = event.target;
      if (value.length > 1) {
         event.target.value = value.substring(0, 1);
      };
      onChange(event);
   };

   const keyDownHandler = ({ keyCode, target}) => {
      let { nextElementSibling, value } = target;
      if (nextElementSibling && value && keyCode !== 8) {
         nextElementSibling.focus();
      };
   };
   
   return (
      <div id="digits-input">
         {[...Array(6).keys()].map((index) => 
            <input
               {...rest}
               key={index}
               type="number"
               data-pos={index}
               onChange={onChangeEntry}
               onKeyDown={keyDownHandler}
               className="digit-entry"/>)}
      </div>
   )
};

export default DigitsInput;