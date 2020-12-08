import React, { Component } from 'react';
import logupContext from '../../utils/contexts';
import './styles/DateInput.css';

class DateInput extends Component {

   state = {};
   
   static contextType = logupContext;

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
            <label>
               Fundación: <span style={{color: 'red'}}>*</span>
            </label>
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
               {this.state.error  &&
                  <span className='foundation-error'>
                     {this.context.errors['foundation']}
                  </span>            
               }
         </div>
      );
   };

   componentDidUpdate() {
      let bad = Object.keys(this.context.errors).includes('foundation');
      if (bad && !this.state.error) {
         this.setState({ error: true }, () => {
            setTimeout(
               () => document.querySelector('.foundation-error')
                        .style.transform = 'initial', 1)
         });              
      };
   };


};

export default DateInput;
