import React, { useEffect } from 'react';
import { Input } from '../';
import './styles/PriceInput.css';

function PriceInput({ errors, onChange, ...rest}) {

   useEffect(() => {
      if (errors['price']) {
         document.querySelector('#price-input')
            .style.alignItems = 'center';
      };
   }, [errors]);

   return (
      <div id="price-input">
         <Input {...{ errors, onChange, ...rest }} />
         <select name="pricetype" id="price-type"
               defaultValue="COP" onChange={onChange}>
            <option value="COP">COP</option>
            <option value="USD">USD</option>
            <option value="€">EUR</option>
         </select>
      </div>
   );
};

export default PriceInput;
