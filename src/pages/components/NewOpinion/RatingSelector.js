import React, { Component } from 'react';
import './RatingSelector.css';

class RatingSelector extends Component {

   state = { currentRating: 5 };

   inputChanger = ({ target }) => {
      let ratinput = document.querySelector('input[name="rating"]'),
         { action } = target.dataset,
         value = parseFloat(ratinput.value);
      ratinput.value = action === 'increment' ?
         value + 0.5 :
         value - 0.5;
      this.setState({ currentRating: parseFloat(ratinput.value) })
   };

   render() {
      return (
         <div id="rating-selector">
            <button
               type="button"
               className="far fa-minus-square"
               data-action="decrement"
               onClick={this.inputChanger} />
            <div id="rating-view">
               {this.state.currentRating}
            </div>
            <button
               type="button"
               className="far fa-plus-square"
               data-action="increment"
               onClick={this.inputChanger} />
            <input
               onChange={this.props.onChange}
               value={this.state.currentRating}
               name="rating"
               type="range"
               min="0"
               max="5"
               step="0.5"
               hidden
            />
         </div>
      );
   };

   componentDidUpdate() {
      let rating = parseFloat(this.state.currentRating), bgColor = '';
      if (rating < 3.0) {
         bgColor = '#FF5722';
      } if (rating >= 3.0 && rating <= 4.0) {
         bgColor = '#ffcd29';
      } if (rating > 4.0) {
         bgColor = '#6dcc6d';
      };
      document.getElementById('rating-view')
         .style.backgroundColor = bgColor;
   };

};

export default RatingSelector;
