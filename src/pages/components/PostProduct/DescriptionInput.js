import React from 'react';
import { Input } from '..';
import './styles/DescriptionInput.css';

function DescriptionInput(props) {
   let { currentLength, maxLength, ...rest } = props;

   const maxLengthHandler = ({ target }) => {
      let { value } = target;
      if (value.length >= maxLength) {
         target.value = value.substring(0, maxLength - 1);
      };
   };

   return (
      <Input {...rest}>
         <textarea
            id="ppp-description"
            name="description"
            errors={undefined}
            onKeyDown={maxLengthHandler}
            {...rest}
         />
         <p id="ml-indicator">
            {currentLength}/{maxLength}
         </p>
      </Input>
   );
};

export default DescriptionInput;
