import React, { Fragment } from 'react';
import { statsicons } from '../../../assets';
import './styles/UserStats.css';

function UserStats(props) {

   let { rating_avg, followers, total_products } = props.stats;

   const Stat = (props) => {
      let { stat, label, value } = props;
      return (
         <div className={`stat ${stat}`}>
            <img src={statsicons[stat]} alt={`${stat}-icon`} />
            <span>
               {label}
               <p>{value}</p>
            </span>
         </div>
      );
   };

   return (
      <Fragment>
         <Stat stat="rating" label="Calificación" value={rating_avg || 0} />
         <Stat stat="followers" label="Seguidores" value={followers || 0} />
         <Stat stat="products" label="Productos" value={total_products || 0} />
      </Fragment>
   );

};

export default UserStats;
