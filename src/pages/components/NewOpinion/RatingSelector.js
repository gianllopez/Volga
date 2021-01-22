import React, { Component } from 'react';
import './RatingSelector.css';

class RatingSelector extends Component {

   state = { rating: 10 };

   inputChanger = ({ target }) => {
      let { action } = target.dataset, { rating } = this.state;
      if (rating >= 0 && rating <= 10) {
         this.setState({
            rating: action === 'increment' ?
               rating + 0.5 :
               rating - 0.5
         }, () => {
            let { rating } = this.state;
            if (rating < 0 || rating > 10) {
               this.setState({ rating: rating < 0 ? 0 : rating > 10 && 10 });
            };
            this.props.onChange({ target: { name: 'rating', value: this.state.rating } });
         });
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
      let rating = parseFloat(this.state.rating), bgColor = '';
      if (rating < 5) {
         bgColor = '#FF5722';
      } if (rating >= 5 && rating <= 7.5) {
         bgColor = '#ffcd29';
      } if (rating > 8) {
         bgColor = '#6dcc6d';
      };
      document.getElementById('rating-view')
         .style.backgroundColor = bgColor;
      // if (rating < 0 || rating > 10) {
      //    this.setState({ rating: rating < 0 ? 0 : rating > 10 && 10 })
      // };
   };

};

export default RatingSelector;
