import React from 'react';
import Input from '../common/Input';
import './styles/PriceInput.css';

function PriceInput(props) {
   return (
      <div id="price-input">
         <Input {...props}/>
         <select name="price-type" id="price-type" defaultValue="USD">
            <option value="COP">Pesos Colombianos</option>
            <option value="USD">Dólares</option>
            <option value="€">Euros</option>            
         </select>
      </div>
   );
};

export default PriceInput;
