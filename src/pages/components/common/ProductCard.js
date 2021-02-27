import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

class ProductCard extends Component {

   render() {
      let { images, product, price, key } = this.props['product-data'],
      { user, isowner, onDelete } = this.props;
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
               <Link to={`/${user}/catalog/${key}`}>
                  <button>Ver producto</button>
               </Link>
            </div>
            {isowner &&
               <i className="fas fa-trash-alt" id="delete-btn"
                  onClick={() => onDelete({user, key})}/>}
         </div>
      );
   };

   componentDidMount() {
      // Hacer esto en CSS, con parent:hover children
      let product = this._reactInternalFiber.child.stateNode,
      animDiv = document.querySelector('.to-page');
      product.addEventListener('mouseover',
         () => animDiv.classList.add('show-to-page'));
      product.addEventListener('mouseout',
         () => animDiv.classList.remove('show-to-page'));
   };

};

export default ProductCard;
