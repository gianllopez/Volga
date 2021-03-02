import React, { Component } from 'react';
import { ratingBackground } from '../local-utils';
import './styles/RatingSelector.css';

class RatingSelector extends Component {

   state = { rating: 10 };

   ratingRange = () => {
      let { rating } = this.state;
      this.setState({
         rating: rating < 0 ? 0 :
                 rating > 10 ? 10 : rating });
   };

   inputChanger = ({ target }) => {
      let { action } = target.dataset, { rating } = this.state;
      if (0 <= rating <= 10) {
         this.setState({
            rating: action === 'increment' ?
            rating + 0.5 : rating - 0.5 }, this.ratingRange);
         this.props.onChange({ target: {
            name: 'rating', value: this.state.rating }});
      };
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
               {this.state.rating}
            </div>
            <button
               type="button"
               className="far fa-plus-square"
               data-action="increment"
               onClick={this.inputChanger} />
         </div>
      );
   };

   componentDidUpdate() {
      let rating = parseFloat(this.state.rating);
      document.getElementById('rating-view')
         .style.backgroundColor = ratingBackground(rating);
   };

};

export default RatingSelector;

/* REVISADO Y NO HAY MÁS QUE RESUMIR: 02/02/2021 */
