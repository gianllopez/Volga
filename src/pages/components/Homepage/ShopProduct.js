import React, { Component } from 'react';
import { FavButton } from '../';
import './ShopProduct.css';

class ShopProduct extends Component {   
   
   redirectToPP = () => this.props.history.push('ovo/hoodie');
   
   render() {
      return (
         <div className={`product ${this.props.shop}-product`} onClick={this.redirectToPP}>
            <div className="product-shop">
            <img className="logo" src="https://i.pinimg.com/originals/77/b6/6f/77b66fa7469f75773d5eb443056f2f8f.jpg" alt="shop-logo"/>
               <div className="product-shop-info">
                  <h2>ovotheshop</h2>
                  <span>Drake lorem lorem</span>
               </div>
            </div>
            <img
               className="product-img"
               src="https://magic-custom.com/8693-large_default/ovo-hoodie-black-original-owl-by-drake.jpg"
               alt="here goes the product formated name"
            />
            <div className="product-footer">
               <span>Hoodie OVO 2020</span>
               <p>$500</p>
            </div>
            <FavButton success={false}/>       
         </div>
      );
   };
};

export default ShopProduct;
