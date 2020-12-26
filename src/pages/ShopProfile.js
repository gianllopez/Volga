import React, { Component, Fragment } from 'react';
import {
   ShopStats,
   ProductCard,
   UserOpinion,
   NavBar,
   Footer } from './components/';
import './styles/ShopProfile.css';

class ShopProfile extends Component {
   
   render() {
      return (
         <Fragment>
            <NavBar/>
            <div id="shop-profile">
               <section id="profile-header" className="profile-section">
                  <figure>
                     <img src="https://i.pinimg.com/originals/77/b6/6f/77b66fa7469f75773d5eb443056f2f8f.jpg" alt="shop-logo"/>
                  </figure>
                  <div id="shop-info">
                     <h2>ovotheshop</h2>
                     <h4>Aubrey Drake Graham</h4>                  
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse!
                        Lorem ipsum dolor sit amet consectetur adipisicing e
                     </p>               
                  </div>
                  <div id="interaction-btns">
                     <button>Contactar</button>
                     <button>Seguir</button>
                  </div>
               </section>
               <section id="shop-stats" className="profile-section">
                  <ShopStats/>
               </section>
               <section id="shop-products" className="profile-section">
                  <h3 className="section-title">Aquí puedes encontrar:</h3>
                  <div id="products">
                     <ProductCard/>
                     <ProductCard/>
                     <ProductCard/>
                     <ProductCard/>
                     <ProductCard/>
                  </div>               
               </section>
               <section id="shop-opinions" className="profile-section">
                  <h3 className="section-title">Los clientes opinan:</h3>
                  <div id="opinions">
                     <UserOpinion/>
                     <UserOpinion/>
                     <UserOpinion/>
                     <UserOpinion/>
                     <UserOpinion/>
                  </div>
               </section>
            </div>
            <Footer/>
         </Fragment>
      );
   };
};

export default ShopProfile;
