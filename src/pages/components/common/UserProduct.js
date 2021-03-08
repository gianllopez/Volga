import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '../';
import './styles/UserProduct.css';

class UserProduct extends Component {

   showProductNavigation = () => {
      let { stateNode } = this._reactInternalFiber.child,
      { classList } = stateNode.querySelector('.product-navigation');
      classList.toggle('show-navigation');
   };

   render() {
      let { user, images, key, price, product, isfav } = this.props.data,
      userdata = user ? user : { username: '', name: '', picture: '' };
      return (
         <div className="product-wrapper" onClick={this.showProductNavigation}>
            <div className="product-user">
               <Link to={{
                  pathname: `/users/${user.username}`,
                  state: {exists: true}}}>
                  <img className="logo" src={userdata.picture} alt="user-pp" />
               </Link>
               <div className="product-user-info">
                  <h2>{userdata.username}</h2>
                  <span>{userdata.name}</span>
               </div>
            </div>
            <img
               className="product-img"
               src={images[0]}
               alt={product && product.replace(' ', '-')}
            />
            <div className="product-footer">
               <span>{product}</span>
               <p>{price}</p>
            </div>
            <FavButton product={key} isfav={isfav} />
            <div className="product-navigation">
               <Link to={{
                  pathname: `/${userdata.username}/catalog/${key}`,
                  state: {product: this.props.data}
               }}> <button>Ver producto</button> </Link>
            </div>
         </div>
      );
   };
};

export default UserProduct;

// Terminado, nada más que resumir...