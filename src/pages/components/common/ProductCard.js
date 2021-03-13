import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

function ProductCard(props) {

   let { images, product, price, key } = props['product-data'],
   { user, isowner, onDelete } = props;

   useEffect(() => {
      let prod = document.getElementById(key),
      { classList } = prod.lastElementChild;
      prod.addEventListener('mouseover',
         () => classList.add('show-to-page'));
         prod.addEventListener('mouseout',
         () => classList.remove('show-to-page'));
   });
   
   return (
      <div className="product-card" id={key}>
         <img src={images[0]} alt="user-product" />
         <div id="product-info">
            <h3>{product}</h3>
            <span>{price}</span>
         </div>
         <div className="page-link">
            <Link to={`/${user}/catalog/${key}`}>
               <button>Ver producto</button>
            </Link>
            {isowner &&
               <i className="fas fa-trash-alt" id="delete-btn"
                  onClick={() => onDelete({user, key})}/>}
         </div>
      </div>
   );

};

export default ProductCard;
