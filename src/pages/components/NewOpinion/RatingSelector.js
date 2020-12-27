import React, { Component } from 'react';
import './RatingSelector.css';

class RatingSelector extends Component {
   render() {
      return (
         <div id="rating-selector">
            <div id="rating-view" style={{ backgroundColor: '#6dcc6d' }}>
               {this.props.currentRating}
            </div>
            <input
               type="range"
               name="rating"
               min="0"
               max="5"
               step="0.5"
               onChange={this.props.changeHandler}
            />
         </div>
      );
   };

   componentDidUpdate() {
      let rating = parseFloat(this.props.currentRating);
      let rtview = document.getElementById('rating-view');
      let bgColor = '';
      if (rating < 3.0) {
         bgColor = '#FF5722'
      } if (rating >= 3.0 && rating <= 4.0) {
         bgColor = '#ffcd29'
      } if (rating > 4.0) {
         bgColor = '#6dcc6d'
      };
      rtview.style.backgroundColor = bgColor;
   };


};

export default RatingSelector;
