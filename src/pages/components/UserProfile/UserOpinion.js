import React from 'react';
import './styles/UserOpinion.css';

function UserOpinion(props) {
   return (
      <div className="opinion">         
         <div className="opinion-title">
            <p>LeBron James</p>
            <span className="gray-content">●</span>
            <p className="gray-content">27/02/2020</p>
         </div>   
         <p className="gray-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sunt.
         </p>
      </div>
   );
};

export default UserOpinion;
