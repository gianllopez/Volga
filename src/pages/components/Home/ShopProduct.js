import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '..';
import './ShopProduct.css';

class ShopProduct extends Component {

   state = {
      fav: false
   };

   favCallback = (event) => {
      event.stopPropagation();
      this.setState({
         fav: this.state.fav ? false : true
      });
   };

   showProductNavigation = () => {
      const product = this._reactInternalFiber.child.stateNode,
         navigation = product.querySelector('.product-navigation');
      navigation.classList.toggle('show-navigation');
   };

   render() {
      return (
         <div className={`product-wrapper ${this.props.shop}-product`} onClick={this.showProductNavigation}>
            <div className="product-shop">
               <img className="logo" src="https://i.pinimg.com/originals/77/b6/6f/77b66fa7469f75773d5eb443056f2f8f.jpg" alt="shop-logo" />
               <div className="product-shop-info">
                  <h2>ovotheshop</h2>
                  <span>Drake lorem lorem</span>
               </div>
            </div>
            <img
               className="product-img"
               src="https://nosw.com.mx/wp-content/uploads/2020/03/Nike-Air-Yeezy-2-Red-October-NOSW-NOStalgia-streetWear-front.jpg"
               alt="here goes the product formated name"
            />
            <div className="product-footer">
               <span>Hoodie OVO 2020</span>
               <p>$500</p>
            </div>
            <FavButton
               success={this.state.fav}
               fetchCallback={this.favCallback}
            />
            <div className="product-navigation">
               <Link to="/login">
                  <button>Ver producto</button>
               </Link>
            </div>
         </div>
      );
   };
};

export default ShopProduct;
