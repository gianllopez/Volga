import React, { Component } from 'react';
import { ShopStats } from './components/';
import './styles/ShopProfile.css';

class ShopProfile extends Component {
   render() {
      return (
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
                  <button>Mensaje</button>
                  <button>Seguir</button>
               </div>
            </section>
            <section id="shop-stats">
               <ShopStats/>
            </section>
         </div>
      );
   };
};

export default ShopProfile;
