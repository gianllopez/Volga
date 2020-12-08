import React, { Component } from 'react';
import logupContext from '../../utils/contexts';
import './styles/DateInput.css';

class DateInput extends Component {

   months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
             'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
             'Diciembre'];

   maxLengthValidator(event) {
      let inputValue = event.target.value;
      const maxLength = event.target.maxLength;
      if (inputValue.length > maxLength) {
         event.target.value = inputValue.slice(0, maxLength);
      };
   };

   render() {
      return (
         <div id="date-input">
            <label>Fundación:</label>
            <div id="date-input-entries">
               
               <select
                  name="month"
                  onChange={this.props.onChange}
                  defaultValue=""
               >
                  
                  <option value="" disabled>Mes</option>
                  {this.months.map((month, i) => (
                     <option value={month} key={i}>
                        {month}
                     </option>
                  ))}
               
               </select>
               
               <input
                  type="number"
                  name="day"
                  placeholder="Día"
                  min="1"
                  max="31"
                  maxLength="2"
                  onInput={this.maxLengthValidator}
                  onChange={this.props.onChange}
               />
               
               <input
                  type="number"
                  name="year"
                  placeholder="Año"
                  maxLength="4"
                  onInput={this.maxLengthValidator}
                  onChange={this.props.onChange}
               />

            </div>
         </div>
      );
   };
};

export default DateInput;
