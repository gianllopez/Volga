import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '..';
import './styles/UserProduct.css';

class ShopProduct extends Component {

   state = { fav: false };

   showProductNavigation = () => {
      const product = this._reactInternalFiber.child.stateNode,
         navigation = product.querySelector('.product-navigation');
      navigation.classList.toggle('show-navigation');
   };

   render() {
      let { user, image_1, key, price, product, isfav } = this.props.data || '',
         userdata = user ? user : { username: '', name: '', picture: '' };
      return (
         <div className="product-wrapper" onClick={this.showProductNavigation}>
            <div className="product-user">
               <img className="logo" src={userdata.picture} alt="user-pp" />
               <div className="product-user-info">
                  <h2>{userdata.username}</h2>
                  <span>{userdata.name}</span>
               </div>
            </div>
            <img
               className="product-img"
               src={image_1}
               alt={product && product.replace(' ', '-')}
            />
            <div className="product-footer">
               <span>{product}</span>
               <p>{price}</p>
            </div>
            <FavButton productkey={key} isfav={isfav} />
            <div className="product-navigation">
               <Link to={`/${userdata.username}/catalog/${key}`}>
                  <button>Ver producto</button>
               </Link>
            </div>
         </div>
      );
   };
};

export default ShopProduct;
