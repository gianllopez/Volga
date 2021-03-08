import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserProfileContext } from '../../UserProfile';
import { FollowButton } from '../';
import './styles/PresentationHeader.css';

function PresentationHeader({ className }) {
   let { picture, username, name,
         itsme, following } = useContext(UserProfileContext);
   return (
      <section id="profile-header" className={className}>
         <img src={picture} alt={`${username}-profpic`} />
         <div id="user-info">
            <h2>{username}</h2>
            <h4>{name}</h4>
         </div>
         {!itsme && 
            <div id="interaction-btns">
               <Link to={`/${username}/contact`}>
                  <button>Contactar</button>
               </Link>
               <FollowButton
                  user={username}
                  following={following} />
            </div>}
      </section>
   );
};

export default PresentationHeader;