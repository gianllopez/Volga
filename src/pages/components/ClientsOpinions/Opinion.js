import React, { Component } from 'react';
import { ratingBackground } from '../local-utils';
import './Opinion.css';

function Opinion(props) {
   let { from, date, comment, rating } = props;
   return (      
      <div className="opinion">
         <div>
            <p>{from} ({date})</p>
            <span style={{
               backgroundColor: ratingBackground(rating)}}>{rating}</span>
         </div>
         <p>{comment}</p>
      </div>
   );
}

export default Opinion;
