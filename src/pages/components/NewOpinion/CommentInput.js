import React, { useState } from 'react';
import { Input } from '../';
import { changeValidator } from '../../../utils/validators';
import './styles/CommentInput.css';

function CommentInput({ name, onChange, ...rest}) {

   const [length, setLength] = useState(0);

   const entryValidation = event => {      
      let { length } = changeValidator(event, 100, onChange);
      setLength(length);
   };

   return (
      <Input {...{ name, ...rest }} >
         <p>{length}/100</p>
         <textarea
            id="comment"
            maxLength="100"
            placeholder="..."
            name={name}
            onChange={entryValidation}
         />
      </Input>
   );

};

export default CommentInput;
