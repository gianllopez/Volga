import React from 'react';
import { ratingBackground } from '../local-utils';
import './Opinion.css';

function Opinion({ from, date, comment, rating }) {
   return (      
      <div className="opinion">
         <div>
            <p>{from} ({date})</p>
            <span style={{backgroundColor: ratingBackground(rating)}}>
               {rating}
            </span>
         </div>
         <p>{comment}</p>
      </div>
   );
}

export default Opinion;

// Terminado, nada más que revisar...
