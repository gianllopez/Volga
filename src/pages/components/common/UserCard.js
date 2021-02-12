import React from 'react';
import './styles/UserCard.css';

function UserCard(props) {
   let { picture, username, name, location } = props.data;
   return (
      <div className="user-card">
         <img src={picture} alt="user-picard"/>
         <div>
            <h3>{username}</h3>
            <h4>{name}</h4>
            <p>{location}</p>
         </div>
      </div>
   );
};

export default UserCard;