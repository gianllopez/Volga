import React, { useEffect, useState } from 'react';
import { ratingBackground } from '../local-utils';
import './styles/RatingSelector.css';

function RatingSelector(props) {

   const [rating, setRating] = useState(10);

   const rangeValidator = val => val < 0 ? 0 : val > 10 ? 10 : val;

   const inputChanger = ({ target }) => {
      let { action } = target.dataset;
      if (0 <= rating <= 10) {
         let newRating = action === 'increment' ?
            rating + 0.5 : rating - 0.5
         setRating(rangeValidator(newRating));
         props.onChange({ target: {
            name: 'rating', value: rating }});
      };
   };

   useEffect(() => {
      let ratingColor = ratingBackground(rating);
      document.getElementById('rating-view')
         .style.backgroundColor = ratingColor;
   }, [rating]);

   return (
      <div id="rating-selector">
         <button
            type="button"
            className="far fa-minus-square"
            data-action="decrement"
            onClick={inputChanger} />
         <div id="rating-view"> {rating} </div>
         <button
            type="button"
            className="far fa-plus-square"
            data-action="increment"
            onClick={inputChanger} />
      </div>
   );

};

export default RatingSelector;

