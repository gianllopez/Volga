import React from 'react';
import { Input } from '../';
import { changeValidator } from '../../../utils/validators';
import './styles/DescriptionInput.css';

function DescriptionInput(props) {
   let { currentLength, maxLength, onChange, ...rest } = props;
   return (
      <Input {...rest}>
         <textarea
            id="ppp-description"
            name="description"
            onChange={(e) => changeValidator(e, 100, onChange)}
         />
         <p id="ml-indicator">
            {currentLength}/{maxLength}
         </p>
      </Input>
   );
};

export default DescriptionInput;

// Treminado