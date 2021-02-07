import React, { Fragment } from 'react';
import { statsicons } from '../../../assets/';
import './styles/ShopStats.css';

function ShopStats(props) {
   
   const defaultValues = { rating_avg: 0, followers: 0, products: 0 };
   let { rating_avg, followers, products } = props.data || defaultValues;
   
   const Stat = (props) => {
      let {stat, label, value} = props;
      return (
         <div className={`stat ${stat}`}>
            <img src={statsicons[stat]} alt={`${stat}-icon`}/>
            <span>
               {label}
               <p>{value}</p>
            </span>
         </div>
      );
   };

   return (
      <Fragment>         
         <Stat stat="rating" label="Calificación" value={rating_avg}/>
         <Stat stat="followers" label="Seguidores" value={followers}/>
         <Stat stat="products" label="Productos" value={products}/>
      </Fragment>
   );

};

export default ShopStats;
