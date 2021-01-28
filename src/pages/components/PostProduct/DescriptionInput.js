import React from 'react';
import { Input } from '..';
import './styles/DescriptionInput.css';

function DescriptionInput(props) {
   return (
      <Input {...props}>
         <textarea
            id="ppp-description"
            name="description"
            maxLength="100"
         />
      </Input>
   );
};

export default DescriptionInput;
