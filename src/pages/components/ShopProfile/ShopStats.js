import React, { Fragment } from 'react';
import { statsicons } from '../../../assets/';
import './styles/ShopStats.css';

function ShopStats(props) {
   
   const defaultValues = {stars: 0, followers: 0, products: 0}; 
   let {stars, followers, products} = props.values || defaultValues;      
   
   const Stat = (props) => {
      let {stat, label, value} = props;
      return (
         <div className={`stat ${stat}`}>
            <figure>
               <img src={statsicons[stat]} alt={`${stat}-icon`}/>
            </figure>
            <span>
               {label}
               <p>{value}</p>
            </span>
         </div>
      );
   };

   return (
      <Fragment>         
         <Stat stat="rating" label="Calificación" value={stars}/>
         <Stat stat="followers" label="Seguidores" value={followers}/>
         <Stat stat="products" label="Productos" value={products}/>
      </Fragment>
   );

};

export default ShopStats;
