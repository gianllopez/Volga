import React from 'react';
import { Input } from '..';
import './styles/DescriptionInput.css';

function DescriptionInput(props) {
   let { currentLength, maxLength, ...rest } = props;
   return (
      <Input {...rest}>
         <textarea
            id="ppp-description"
            name="description"
            maxLength="100"
            errors={undefined}
            {...rest}
         />
         <p id="ml-indicator">
            {currentLength}/{maxLength}
         </p>
      </Input>
   );
};

export default DescriptionInput;
