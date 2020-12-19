import React from 'react';
import Input from '../common/Input';
import './styles/PriceInput.css';

function PriceInput(props) {
   return (
      <div id="price-input">
         <Input {...props}/>
         <select name="price-type" id="price-type" defaultValue="COP">
            <option value="COP">COP</option>
            <option value="USD">USD</option>
            <option value="€">EUR</option>            
         </select>
      </div>
   );
};

export default PriceInput;
