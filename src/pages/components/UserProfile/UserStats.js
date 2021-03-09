import React, { useContext } from 'react';
import { UserProfileContext } from '../../UserProfile';
import { statsicons } from '../../../assets';
import './styles/UserStats.css';

function Stat ({ name, label, value }) {
   return (
      <div className={`stat ${name}`}>
         <img src={statsicons[name]} alt={`${name}-icon`} />
         <span>
            {label}
            <p>{value}</p>
         </span>
      </div>
   );
};

function UserStats(props={}) {
   let { rating_avg, followers, total_products } = useContext(UserProfileContext);
   return (
      <section id="user-stats" className={props.className}>
         <Stat name="rating" label="Calificación"
            value={rating_avg || 0} />
         <Stat name="followers" label="Seguidores"
            value={followers || 0} />
         <Stat name="products" label="Productos"
            value={total_products || 0} />
      </section>
   );
};

export default UserStats;

// Terminado, nada más que revisar...