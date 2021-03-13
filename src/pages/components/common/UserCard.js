import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles/UserCard.css';

function UserCard({ data }) {
   
   const [redirect, setRedirect] = useState(false);

   let { picture, username, name, location } = data;

   return (
      !redirect ?
         <div className="user-card" onClick={() => setRedirect(true)}>
            <img src={picture} alt="user-picard"/>
            <div>
               <h3>{username}</h3>
               <h4>{name}</h4>
               <p>{location}</p>
            </div>
         </div> :
         <Redirect to={{
            pathname: `/users/${username}`,
            state: { exists: true }}} />
   );
   
};

export default UserCard;
