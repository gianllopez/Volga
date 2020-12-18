import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

class ProductCard extends Component {
   
   render() {
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
               <Link to="/">
                  <button>Ver producto</button>
               </Link>
            </div>
         </div>
      );
   };

   componentDidMount() {
      const product = this._reactInternalFiber.child.stateNode;
      const show2page = () => {
         product.querySelector('.to-page')
            .classList
               .toggle('show-to-page')
      };
      product.addEventListener('click', show2page);
      product.addEventListener('hover', show2page);
   };

};

export default ProductCard;
