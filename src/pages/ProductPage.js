import React, { Component, Fragment } from 'react';
import { NavBar } from './components';
import './styles/ProductPage.css';

class ProductPage extends Component {
   render() {
      return (
         <Fragment>
            <NavBar/>
            <div id="product-page-wrapper">
               <figure>
                  <img src="https://cdn.shopify.com/s/files/1/0237/2580/1549/products/2_3d9041e2-f964-4885-af28-497fc3678cd1.png?v=1564329267" alt="product-image"/>
               </figure>
               <div id="productpage-info">
                  <h2>Air Yeezy 2 "Red October"</h2>
                  <h4>$500</h4>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatibus corporis dolores perspiciatis, nulla soluta nemo, expedita ullam unde porro sint aliquam quo, quia atque?
                  </p>
                  <div id="iproduct-btns">
                     <button>Preguntar</button>
                     <button>Añadir a deseos</button>
                  </div>
               </div>
            </div>
            <div id="page-border"/>
         </Fragment>
      );
   };
};

export default ProductPage;
