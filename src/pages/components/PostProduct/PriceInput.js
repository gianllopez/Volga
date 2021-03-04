import React, { Component } from 'react';
import Input from '../common/Input';
import './styles/PriceInput.css';

class PriceInput extends Component {

   render() {
      return (
         <div id="price-input">
            <Input {...this.props} />
            <select
               name="pricetype" id="price-type"
               defaultValue="COP" onChange={this.props.onChange}>
               <option value="COP">COP</option>
               <option value="USD">USD</option>
               <option value="€">EUR</option>
            </select>
         </div>
      );
   };

   componentDidUpdate() {
      if (this.props.errors['price']) {
         document.querySelector('#price-input')
            .style.alignItems = 'center';
      };
   };


};

export default PriceInput;
// Terminado
