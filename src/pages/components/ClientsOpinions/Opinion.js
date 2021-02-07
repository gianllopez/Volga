import React from 'react';
import './Opinion.css';

function Opinion(props) {
   let { from, date, comment } = props;
   return (
      <div className="opinion">
         <div className="opinion-title">
            <p>{from}</p>
            <span className="gray-content">●</span>
            <p className="gray-content">{date.replace('-', '/')}</p>
         </div>
         <p className="gray-content">{comment}</p>
      </div>
   );
};

export default Opinion;
