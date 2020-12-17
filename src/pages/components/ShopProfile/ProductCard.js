import React from 'react';
import './styles/ProductCard.css';

function ProductCard(props) {
   return (
      <div className="product-card">
         <figure>
            <img src="https://http2.mlstatic.com/D_NQ_NP_806395-MCO44222237959_122020-O.webp" alt="product-image"/>
         </figure>
         <div id="product-info">
            <h2>Air Jordan de J Balvin</h2>
            <span>$321</span>
         </div>
         <div className="to-page">
            <button>Ver producto</button>
         </div>
      </div>
   );
};

export default ProductCard;
