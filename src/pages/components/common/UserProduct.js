import React from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '../';
import './styles/UserProduct.css';

function ProductUserInfo(props) {
   let { username, picture, name } = props;
   return (
      <div className="product-user">
         <Link to={{
            pathname: `/users/${username}`,
            state: { exists: true }}}>
            <img className="logo" src={picture} alt="user-prof-pic" />
         </Link>
         <div className="product-user-info">
            <h2>{username}</h2>
            <span>{name}</span>
         </div>
      </div>    
   );
};

function UserProduct({ data }) {

   let { user, images, key, price, product, isfav } = data;

   const toggleNav = () =>
      document.querySelector(`#prod-${key} .product-nav`)
         .classList.toggle('show-navigation');

   return (
      <div className="product-wrapper" id={`prod-${key}`} onClick={toggleNav}>
         <ProductUserInfo {...user}/>
         <img
            className="product-img"
            src={images[0]}
            alt={product.toLowerCase().replace(' ', '-')}
         />
         <div className="product-footer">
            <span>{product}</span>
            <p>{price}</p>
         </div>
         <FavButton product={key} isfav={isfav} />
         <div className="product-nav">
            <Link to={`/${user.username}/catalog/${key}`}>
               <button>Ver producto</button>
            </Link>
         </div>
      </div>
   );

};

export default UserProduct;

// Terminado, nada más que resumir...
