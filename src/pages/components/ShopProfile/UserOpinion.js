import React from 'react';
import './styles/UserOpinion.css';

function UserOpinion(props) {
   return (
      <div className="opinion">
         <img src="https://elintra.com.ar/wp-content/uploads/2020/10/LeBron-James-10.jpg" alt="user-photo"/>
         <div className="opinion-content">
            <h3>LeBron James</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sunt.</p>
         </div>
      </div>
   );
};

export default UserOpinion;
