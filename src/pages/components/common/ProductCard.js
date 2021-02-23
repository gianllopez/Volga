import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

class ProductCard extends Component {

   render() {
      let { images, product, price, key } = this.props['product-data'];
      return (
         <div className="product-card">
            <figure>
               <img src={images[0]} alt="user-product" />
            </figure>
            <div id="product-info">
               <h2>{product}</h2>
               <span>{price}</span>
            </div>
            <div className="to-page">
               <Link to={`/${this.props.user}/catalog/${key}`}>
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
