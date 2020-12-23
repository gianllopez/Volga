import React from 'react';
import Input from '../common/Input';
import './styles/PriceInput.css';

function PriceInput(props) {
   return (
      <div id="price-input">
         <Input {...props}/>
         <select name="pricetype" id="price-type" defaultValue="COP" onChange={props.onChange}>
            <option value="COP">COP</option>
            <option value="USD">USD</option>
            <option value="€">EUR</option>            
         </select>
      </div>
   );
};

export default PriceInput;
