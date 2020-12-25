import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
   ShopStats,
   ProductCard,
   UserOpinion,
   SocialNetLink,
   NavBar } from './components/';
import './styles/ShopProfile.css';

class ShopProfile extends Component {
   
   contactScroll = () => document.getElementById('social-networks').scrollIntoView();   
   
   render() {
      return (
         <Fragment>
            <NavBar/>
            <div id="shop-profile">
               <section id="profile-header">
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
                     <button onClick={this.contactScroll}>Contactar</button>
                     <button id="follow">Seguir</button>
                  </div>
               </section>
               <section id="shop-stats">
                  <ShopStats/>
               </section>
               <section id="shop-products">
                  <h3>Aquí puedes encontrar:</h3>
                  <div id="products">
                     <ProductCard/>
                     <ProductCard/>
                     <ProductCard/>
                     <ProductCard/>
                     <ProductCard/>
                  </div>               
               </section>
               <section id="shop-opinions">
                  <h3>Los clientes opinan:</h3>
                  <div id="opinions">
                     <UserOpinion/>
                     <UserOpinion/>
                     <UserOpinion/>
                     <UserOpinion/>
                     <UserOpinion/>
                  </div>
               </section>
            </div>
         </Fragment>
      );
   };
};

export default ShopProfile;
