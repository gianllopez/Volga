import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

class ProductCard extends Component {

   render() {
      let { image, name, price } = this.props;
      return (
         <div className="product-card">
            <figure>
               <img src={image} alt="user-product" />
            </figure>
            <div id="product-info">
               <h2>{name}</h2>
               <span>{price}</span>
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
