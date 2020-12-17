import React, { Component, Fragment } from 'react';
import { statsicons } from '../../../assets/';
import './ShopStats.css';

function Stat(props) {
   const {stat, label, value} = props;
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

class ShopStats extends Component {
   
   defaultValues = {stars: 0, followers: 0, products: 0}
   
   render() {   
      let {stars, followers, products} = this.props.values || this.defaultValues;   
      return (
         <Fragment>         
            <Stat stat="rating" label="Calificación" value={stars}/>
            <Stat stat="followers" label="Seguidores" value={followers}/>
            <Stat stat="products" label="Productos" value={products}/>
         </Fragment>
      );
   };
   
};

export default ShopStats;
